# React Native - My Doctor App (IOS and ANDROID)

The My Doctor App is created using [**React Native**](https://reactnative.dev 'Cross Platform Mobile Application Development Framework') with support of few other popular third party libraries like [**React Navigation**](https://reactnavigation.org 'For Screen Navigations'), [**Axios**](https://axios-http.com 'For HTTP Requests') etc.

## Icon Libraries
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons 'For Icons')

## Dependencies

- [React Navigation](https://reactnavigation.org 'For Screen Navigations')
  - [Stack Navigator](https://reactnavigation.org/docs/stack-navigator 'Stack Navigator')
  - [Bottom Tab Navigator](https://reactnavigation.org/docs/bottom-tab-navigator 'Bottom Tab Navigator')
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons 'Popular React Native Icon Library')
- [Axios](https://axios-http.com 'For HTTP Requests')

## UI Design
[**My Doctor App** by *Build With Angga*](https://www.figma.com/file/ggxDY6AuJrkGVrTUhDfBjG/MyDoctor?node-id=368%3A65)

## Setup instructions

### 1. Clone Repository

```sh
# Clone the app
git clone https://github.com/dewaary/my-doctor-app.git
```

### 2. Install all dependencies

```sh
# navigate to app directory
cd my_doctor_app
npm install
```

```sh
#Running on IOS
cd my_doctor_app/ios
pod install
```

## For Mac M1 User

Mac M1 architecture is not directly compatible with Cocoapods. If you encounter issues when installing pods, you can solve it by running:

```sh
sudo arch -x86_64 gem install ffi
arch -x86_64 pod install
```
These commands install the ffi package, to load dynamically-linked libraries and let you run the pod install properly, and runs pod install with the proper architecture.
