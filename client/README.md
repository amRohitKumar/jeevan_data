Jeevan.Data is a virtual health-assistant able to predict diseases using ML, storing medical records and curating 
healthcare articles along with a doctor-patient interaction facility.

![Logo](https://github.com/shutupRohit/jeevan_data/blob/main/client/public/jeevan-data-logo.png)


## Overview

We plan to create an ecosystem where patients can store their medical history and
enable digitalisation of medical records and be a carrier in the government of
India’s ayushman bharat yojana. We plan to shift Indian patients on preventive
healthcare using AI-based algorithms which can identify various diseases like Skin
Cancer, Covid-19, Retinal Diseases,Pneumonia,etc. in advance and will prompt the user to visit the doctor.
This will help in reducing medical bills of patients and will help them to live a better
life. This ecosystem will also reduce the burden on the medical infrastructure and
doctors of our country.

Currently, a standard government hospital or local healthcare facility is unable to uniformly document all
records for services.This creates issues such as requirement of repeated diagnostic tests and consultations,
delayed treatments, concealment or ignorance of medical history etc.Even in hospitals where digital records
are maintained, there is no provision of electronic transfer of patient records from one service provider to
another. Using Jeevan.Data, a patient will be able to keep track of their health records and will be able to
access them on the go. We plan to increase awareness by making healthcare-related articles available daily in 
the app.

## Client Folder Structure
    
    .
    ├── client                   
    │   ├── node_modules         # Node modules
    │   ├── public               # React public directory
    │   ├── src                  
    │   │   ├── api              # Axios api folder
    │   │   ├── assets           # Static assets
    │   │   ├── components       # React components
    │   │   ├── page             # React pages
    │   │   ├── redux            # Redux store
    │   │   ├── firebase.js      # Firebase authentication file
    │   │   ├── index.css        # CSS file
    │   │   ├── App.css          # CSS file
    │   │   ├── App.js           
    │   │   ├── index.js         
    │   │   └── README.md             
    │   ├── package-lock.json         
    │   ├── package.json         
    │   └── README.md                           
    └── ...

## Local Setup:
1. Clone the github repository.
```
https://github.com/amRohitKumar/jeevan_data.git
```
2. Open the folder in Visual Studio Code.
3. Go to the client directory.
```
cd client
```
4. Ensure that you have [Node.js](https://nodejs.org/en/) installed.
5. Install required dependencies by :
```
npm install
```
6. Start development server for react by running following command , this will start your application in http://localhost:3000/ :
```
npm start
```
**Frontend of website is hosted at https://main--splendorous-dragon-dfa2c8.netlify.app
**Since ML models and backend are not hosted, we have to serve this as well locally.**


## Features Implemented

1. Able to instantlydiagnose Covid-19,  Pneumonia, 3 types of Skin-Cancer, 46 types of Retinal Diseases with over 90% accuracy.
2. Curated Healthcare Articles available in regional languages daily.
3. Stores and digitises medical records.
4. Displays contact info of specialist Doctor.


## Future Scope:
1. Inclusion of more diseases which can be diagnosed using ML models.  
2. Video call facility with doctors and experts
3. To make the project more visual/hearing impaired-friendly.  
4. Collaboration with the government to digitise all of the medical records  present.
5. Collaboration with telemedicine companies to have medicine available at patients’ doorstep.



# Tech Stack

1. Web Application - React Js,Node Js,MongoDB,Express (MERN-Stack),Redux,REST-APIs,Styling frameworks.
2. AI -  Python,OpenCV,Flask,PyTorch,Docker,Seaborn,MatplotLib, TensorFlow, Flask.

# Contributing
* Pull Requests (PRs) are appreciated.
* The process for contribution is the following:
  *  Clone the project
  *  Create a feature branch e.g feature_branch
  *  Open a PR to develop
  *  Wait for review and approval.
 * Try to follow PEP-8 guidelines and add useful comments.


# Devlopers:

1. Rohit Kumar, B.Tech in Computer Science and Engineering
2. Apoorva Bhardwaj,B.Tech in Electrical Engineering
3. Mohd Rehan,B.Tech in Electrical Engineering
4. Harsh Gupta,B.Tech in Electronics and Communications Engineering
