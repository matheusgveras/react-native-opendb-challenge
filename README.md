
# Considerations
Developer time: 3 days, 8 hour each for developer

# Known Bugs:
After answering the 10 questions and showing modal with the results, the game does not restart and if you continue you may get an error.

Results tab not implemented

Missed some tests

# Incomplete Implementations
Results screen implemented after 10 questions, but tabScreen results not
Tests not completed.


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
        ├── android                     # Icons & SplashScreens
        ├── iOS                         # Icons & SplashScreens  
    ├── src
    │   ├── components                  # Recursos de design / Design 
    |       ├── button                  
    |       ├── button-footer           # Footer Button of Screen
    |       ├── button-select           # Button tag function
    |       ├── header                  # Component header of screens
    |       ├── layout                  # Base Layout of Screens
    |       ├── list                    # List of categories                
    │   ├── configurations              # Componentes de tela / Screen compoments
    |       ├── api                     # axios configuration
    │       ├── navigations             # react-navigation configurator  
    |       └── store                   # redux rematch configuration 
    │   ├── helpers                     # pose animations helpers
    |       └── animeted                 
    │   ├── resources                   # images / const of layout 
    │   ├── screens                     # Screens
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
