# reactRedux_tutorialProject
Main purpose of this project is explain redux basics with detail comment lines like a tutorial. \
Redux has many different components like a store, provider, reducer, action, dispacth, connect  etc. \
Simple stock filtering application was developed to give an example for these redux components. \
User can search on stock list or apply some filter operations such as applying discount or selecting only fruit or vegetables. 

## Project Structure
\
Project folder and file structure are shown as below.
\
├─ **assets**\
├&nbsp;&nbsp;&nbsp;&nbsp;├─ *App.css* \
├\
├─ **components**\
├  &nbsp;&nbsp;&nbsp;&nbsp;├─ *FilterArea.js* \
├  &nbsp;&nbsp;&nbsp;&nbsp;├─ *listArea.js* \
├  &nbsp;&nbsp;&nbsp;&nbsp;├─ *Main.js* \
├\
├─ **constants**\
├&nbsp;&nbsp;&nbsp;&nbsp;├─ *ProductList.js* \
├\
├─ **redux**\
├&nbsp;&nbsp;&nbsp;&nbsp;└─ **actions**\
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ *FilterAction.js*  \
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ *FruitAction.js*  \
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ *VegetableAction.js*  \
├&nbsp;&nbsp;&nbsp;&nbsp;└─ **reducers**\
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ *FilterReducers.js* \
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ *FruitReducers.js* \
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ *VegetableReducer.js* \
├\
└─ *index.js*

## Installation & Starting Project

This project created with ``` npx create-react-app <project_name>``` command.\
Please visit https://reactjs.org/ to learn more information about react. 

To install libraries:
``` 
cd <project_folder>
npm install
```

To start project:
```
npm start
```

## Sample Screenshots
![Screenshot 1](/src/assets/screenshots/screenshot_1.PNG)
</br></br>
---
</br>
![Screenshot 2](/src/assets/screenshots/screenshot_2.PNG)
