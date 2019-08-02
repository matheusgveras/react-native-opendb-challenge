![](https://firebasestorage.googleapis.com/v0/b/matheus-veras.appspot.com/o/GIF-190801_150913.gif?alt=media&token=78a8c701-b066-4be0-b184-901806f237dd
)


# Considerations
Developer time: 3 days, 8 hour each for developer

# Known Bugs:
After answering the 10 questions and showing modal with the results, the game does not restart and if you continue you may get an error.

Results tab not implemented

Missed some tests

# Incomplete Implementations
Results screen implemented after 10 questions, but tabScreen not


# Installation

```bash
React Native - setup your development environment
https://facebook.github.io/react-native/docs/getting-started.html 
```

```bash
$ git clone https://github.com/matheusgveras/react-native-opendb-challenge.git
$ cd react-native-opendb-challenge
$ yarn
$ react-native run-ios or react-native run-android 
```


# Structure
    .
    ├── ...
    ├── __test__                        #
        ├── components                  # 
    |       ├── __snaphots__            # last layout of component
        ├── models                      # 
    |       ├── __snaphots__            # last layout of component
        ├── screens                     # 
    |       ├── __snaphots__            # last layout of component  
    ├── android   
    ├── ios
    ├── resources
        ├── android                      
        ├── iOS                           
    ├── src
    │   ├── components                   
    |       ├── button                  
    |       ├── button-footer           # footer Button of Screen
    |       ├── button-select           # button tag function
    |       ├── header                  # component header of screens
    |       ├── layout                  # base Layout of Screens
    |       ├── list                    # list of categories                
    │   ├── configurations              #
    |       ├── api                     # axios configuration
    │       ├── navigations             # react-navigation configurator  
    |       └── store                   # redux rematch configuration 
    │   ├── helpers                     # pose animations helpers
    |       └── animeted                 
    │   ├── resources                   # images / const of layout 
    │   ├── screens                     # screens
            ├── welcome                 
            ├── apresentation
            ├── categories
            ├── questions
            ├── results                      
 
    │   └── ...                 
    └── ...




# Versions
Android: targetSdkVersion = 28
React Native: 0.60.4

# A third party liberies
react-native-modalbox
react-native-pose
react-native-vector-icons
