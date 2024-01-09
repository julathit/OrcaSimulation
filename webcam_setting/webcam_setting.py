import subprocess
import re
import os
import tkinter as tk
from tkinter import Scale, filedialog

# Function to adjust webcam settings
def set_webcam_settings(device, setting, value):
    subprocess.run(["v4l2-ctl", "-d", device, "--set-ctrl", f"{setting}={value}"])

# Function to get current webcam settings
def get_current_webcam_setting(device, setting):
    result = subprocess.run(["v4l2-ctl", "-d", device, "--get-ctrl", setting], capture_output=True, text=True)
    return int(re.search(r'\d+', result.stdout).group()) if result.stdout else 0

# Update functions for each setting
def update_setting(setting, value):
    set_webcam_settings("/dev/video0", setting, int(value))
    sliders[setting].set(int(value))

# Save settings to a new text file
def save_settings():
    file_path = filedialog.asksaveasfilename(initialdir="./settings", defaultextension=".txt", filetypes=[("Text files", "*.txt"), ("All files", "*.*")])
    if file_path:
        with open(file_path, 'w') as file:
            for setting, slider in sliders.items():
                file.write(f"{setting}={slider.get()}\n")

# Read settings from a selected text file
def read_settings():
    file_path = filedialog.askopenfilename(initialdir="./settings", filetypes=[("Text files", "*.txt"), ("All files", "*.*")])
    if file_path:
        with open(file_path, 'r') as file:
            for line in file:
                setting, value = line.strip().split('=')
                update_setting(setting, int(value))

# Create the main window
root = tk.Tk()
root.title("Webcam Settings")

# Define settings and their respective ranges
settings = {
    "brightness": (0, 255),
    "contrast": (0, 120),
    "saturation": (80, 255),
    "sharpness": (0, 100),
    "white_balance_temperature": (2000, 7500),
    "focus_absolute": (0, 250)
}

# Create sliders for each setting
sliders = {}
for setting, (min_val, max_val) in settings.items():
    slider = Scale(root, from_=min_val, to=max_val, orient='horizontal', label=setting.capitalize().replace('_', ' '), command=lambda val, s=setting: update_setting(s, val))
    slider.set(get_current_webcam_setting("/dev/video0", setting))
    sliders[setting] = slider
    slider.pack()

# Check if the settings directory and default file exists, if not create them
os.makedirs("settings", exist_ok=True)
default_file_path = "settings/default.txt"
if not os.path.exists(default_file_path):
    file_path = "settings/default.txt"  # specify the file path and name
    with open(file_path, 'w') as file:
        for setting, slider in sliders.items():
            file.write(f"{setting}={slider.get()}\n")

# Add a save button
save_button = tk.Button(root, text="Save", command=save_settings)
save_button.pack()

# Add a read button
read_button = tk.Button(root, text="Read", command=read_settings)
read_button.pack()

# Start the GUI
root.mainloop()
