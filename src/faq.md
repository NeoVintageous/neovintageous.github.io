# F.A.Q.

[[toc]]

## Key Presses are Laggy or Slow?

If you are experiencing laggy or slow key presses, it could be due to the system configuration. Here are some steps you can take to improve the responsiveness of key presses.

- On **Mac**: Enable Key Repeat

  If holding down a key like "j" does not repeat the command (a feature of Mac), you can enable key repeat by running this command once at the terminal:

  ```bash
  defaults write com.sublimetext.3 ApplePressAndHoldEnabled -bool false
  ```

- On **Ubuntu**: Configure Repeat Interval and Delay

  You can adjust the keyboard repeat interval and delay using `gsettings`. Open a terminal and run the following commands:

  ```bash
  gsettings set org.gnome.desktop.peripherals.keyboard repeat-interval 15
  gsettings set org.gnome.desktop.peripherals.keyboard delay 180
  ```

- On **KDE**: Configure Key Delay and Rate

  For KDE users, you can change the keyboard delay and rate by running the following command:

  ```bash
  systemsettings5 kcm_keyboard
  ```

  This will bring up a window where you can change the 'Delay' and 'Rate' settings as required.

- On **X11** based systems: Set Keyboard Repeat Rate

  For X11 type systems, you can directly set the keyboard repeat rate using `xset`. Open a terminal and run the following command:

  ```
  xset r rate <milliseconds_before_repeating> <repetitions_per_second>
  ```

  For example, to set a 300 milliseconds delay before repeating and a repetition rate of 30 repetitions per second, use:

  ```bash
  xset r rate 300 30
  ```

  By adjusting these settings, you can enhance the responsiveness of key presses and improve your typing experience in Sublime Text or any other applications on your system.
