from flask import Flask, request, jsonify, render_template
import pickle
import numpy as np  
import pandas as pd  
from flask_cors import CORS
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report,confusion_matrix
from keras.callbacks import ReduceLROnPlateau
import matplotlib.pyplot as plt
import seaborn as sns
import keras
import os
import cv2
from keras.models import Sequential
from keras.layers import Dense, Conv2D , MaxPool2D , Flatten , Dropout , BatchNormalization
from keras.preprocessing.image import ImageDataGenerator
from util import base64_to_pil
import matplotlib.image as mpi
import werkzeug
import json


#######  AV ######
data_dir = './'

import numpy as np
import pandas as pd
import cv2
import matplotlib.pyplot as plt
import seaborn as sns
import torch
import json
import os
from torchvision.io import read_image
from PIL import Image
import yaml

import yaml
import numpy as np   # linear algebra
import pandas as pd  # data processing, CSV file I/O (e.g. pd.read_csv)
import os
import torch
import torchvision
import matplotlib.pyplot as plt
import seaborn as sns
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader
import torchvision.transforms as transforms
from torchvision import datasets,models
import math
import torch.optim as optim
from torch.optim import lr_scheduler
import copy
import time
from PIL import Image
from datetime import datetime

####R
from flask import Flask, request, jsonify, render_template
import pickle
import numpy as np  
import pandas as pd  
from flask_cors import CORS
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report,confusion_matrix
from keras.callbacks import ReduceLROnPlateau
import matplotlib.pyplot as plt
import seaborn as sns
import keras
import os
import cv2
from keras.models import Sequential
from keras.layers import Dense, Conv2D , MaxPool2D , Flatten , Dropout , BatchNormalization
from keras.preprocessing.image import ImageDataGenerator
from util import base64_to_pil
import matplotlib.image as mpi
import werkzeug
import json
import torch
import torch.nn as nn
import torchvision.transforms as transforms
import torch.nn.functional as F
import sklearn
import torchvision
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import numpy as np
import pandas as pd
import os
import matplotlib.pyplot as plt
import PIL
from PIL import Image
import albumentations as A
from albumentations.pytorch import ToTensorV2
import seaborn as sns
import glob
from pathlib import Path
#################

class Flattener(nn.Module):
    def forward(self, x):
        batch_size, *_ = x.shape
        return x.view(batch_size, -1)

def get_trans():
    normalize = transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
    data_transforms = {
        'train': transforms.Compose([
            transforms.Resize((230, 230)),
            transforms.RandomRotation(30, ),
            transforms.RandomCrop(224),
            transforms.RandomHorizontalFlip(),
            transforms.RandomVerticalFlip(),
            transforms.ToTensor(),
            normalize
        ]),
        'valid': transforms.Compose([
            transforms.Resize((400, 400)),
            transforms.CenterCrop((224, 224)),
            transforms.ToTensor(),
            normalize
        ]),
        'test': transforms.Compose([
            transforms.Resize((224, 224)),
            transforms.ToTensor(),
            normalize
        ]),
    }
    return data_transforms


def pil_loader(path):
    with open(path, 'rb') as f:
        img = Image.open(f)
        return img.convert('RGB')

########### AV ###########




app = Flask(__name__, static_folder="public")
CORS(app)
 
model =keras.models.load_model('weights.h5')
 
UPLOAD_FOLDER = './public'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/', methods=['GET'])
def index():
    '''
    Render the main page
    '''
    return render_template('index.html')


@app.route('/predict', methods=['GET', 'POST'])
def predict():
    '''
    predict function to predict the image
    Api hits this function when someone clicks submit.
    '''
    
    if request.method == 'POST':
        # Get the image from post request
        #img = base64_to_pil(request.json)
        
        file = request.files['image']
        disease = request.form['disease'] # disease entered by user
        filename = file.filename
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)                       #slashes should be handeled properly
        file.save(file_path)

        ######## AV ##########
        # Placeholder
        result = 0
        if disease == 'Covid-19':

            # Class for loading test dataset
            class TestDataset(torch.utils.data.Dataset):
                def __init__(self, path, transform=None):
                    self.path = path
                    self.transform = transform

                def __len__(self):
                    return 1

                def __getitem__(self, idx):
                    img_path = self.path
                    image = pil_loader(img_path)
                    if self.transform:
                        image = self.transform(image)

                    return image, 0
            data_transforms = get_trans()

            def idx_to_class(indices):
                indices = indices[0]
                classes = []
                for index in indices:

                    if index == 0:
                        classes.append('Covid Positive')
                    else:
                        classes.append("Covid Negative")
                return classes

            def predict_covid(model_path, dataloader, print_progress=False):

                """

                :param model_path: Path of Model used for prediction
                :param dataloader: Test DataLoader
                :param print_progress: Prints progress if True
                :return: Prediction(as a list) on test folder defined by config file
                """

                model = torch.load(model_path)
                #device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
                device = torch.device("cpu")

                # model.to(device)
                model.eval()

                predictions = {}
                with torch.no_grad():
                    for ii, (images, _) in enumerate(dataloader, start=1):

                        if print_progress:
                            if ii % 5 == 0:
                                print('Batch {}/{}'.format(ii, len(dataloader)))

                        # images = images.to(device)

                        logps = model(images)
                        ps = torch.exp(logps)

                        # Top indices
                        _, top_indices = ps.topk(1)
                        top_indices = top_indices.detach().cpu().numpy().tolist()
                        # print(top_indices)
                        # Convert indices to classes
                        top_classes = idx_to_class(top_indices)
                        # print("Img:" ,img_names)
                        # for i, img_name in enumerate(img_names):
                        # predictions[img_name] = top_classes[i]

                    # print('\nPrediction Generation Completed')

                return top_classes

            ###### Model_Path ##########

            #model_path = data_dir + os.path.join(model_pth, 'DenseNet_13.24_2022-05-07.pth')

            # Put path of model in this variable after uncommenting
            model_path = './DenseNet_9911.pth'


            test_dataset = TestDataset(file_path, data_transforms['test'])
            test_loader = torch.utils.data.DataLoader(test_dataset, batch_size=1, shuffle=False)

            """"
                model_pth : path of model
                img_path : image path
                pre: stores predictions
            """

            pre = predict_covid(model_path, test_loader)
            result = pre[0]

        if disease == 'Skin_Cancer':

            data_transforms = get_trans()
            def idx_to_class(indices):
                indices = indices[0]
                classes = []
                for index in indices:

                    if index == 0:
                        classes.append('benign')
                    else:
                        classes.append("malignant")
                return classes

            # Class for loading test dataset
            class TestDataset(torch.utils.data.Dataset):
                def __init__(self, path, transform=None):
                    self.path = path
                    self.transform = transform

                def __len__(self):
                    return 1

                def __getitem__(self, idx):
                    img_path = self.path
                    image = pil_loader(img_path)
                    if self.transform:
                        image = self.transform(image)

                    return image, 0

            class Flattener(nn.Module):
                def forward(self, x):
                    batch_size, *_ = x.shape
                    return x.view(batch_size, -1)

            def predict_skin(model_path, dataloader, print_progress=False):

                """

                :param model_path: Path of Model used for prediction
                :param dataloader: Test DataLoader
                :param print_progress: Prints progress if True
                :return: Prediction(as a list) on test folder defined by config file
                """

                model = torch.load(model_path)
                #device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
                device = torch.device('cpu')


                model.to(device)
                model.eval()

                predictions = {}
                with torch.no_grad():
                    for ii, (images, _) in enumerate(dataloader, start=1):

                        if print_progress:
                            if ii % 5 == 0:
                                print('Batch {}/{}'.format(ii, len(dataloader)))

                        images = images.to(device)

                        logps = model(images)
                        ps = torch.exp(logps)

                        # Top indices
                        _, top_indices = ps.topk(1)
                        top_indices = top_indices.detach().cpu().numpy().tolist()
                        # print(top_indices)
                        # Convert indices to classes
                        top_classes = idx_to_class(top_indices)
                        # print("Img:" ,img_names)
                        # for i, img_name in enumerate(img_names):
                        # predictions[img_name] = top_classes[i]

                    # print('\nPrediction Generation Completed')

                return top_classes
            ##### PATH ########


            #model_path = "D:\Xview2\Jeevan_Data_Hackfest'22\Skin_Cancer\Models\85acc.pth"

            # Put path of model in this variable after uncommenting
            model_path = './85acc.pth'
            test_dataset = TestDataset(file_path, data_transforms['test'])
            test_loader = torch.utils.data.DataLoader(test_dataset, batch_size=1, shuffle=False)

            pre = predict_skin(model_path, test_loader)
            result = pre[0]




        ######## AV #######

        # #filename = werkzeug.utils.secure_filename(file.filename)
        # img = cv2.imread(file_path, cv2.IMREAD_GRAYSCALE)
        # img = cv2.resize(img, (150,150))                       # (height, width, channels)
        # img=np.array(img)         # (1, height, width, channels), add a dimension because the model expects this shape: (batch_size, height, width, channels)
        # # img  /= 255
        # img=img.reshape(1,150,150,1)
        # #final_features = np.array(img)
        # #final_features=final_features.reshape(1,150,150,1)
        # prediction = model.predict(img)
        # if(prediction[0]>0.5):
        #     result='YES'
        # else:
        #     result='NO'
        if(disease=='Pneumonia'):
            img = cv2.imread(file_path, cv2.IMREAD_GRAYSCALE)
            img = cv2.resize(img, (150,150))                       # (height, width, channels)
            img=np.array(img)         # (1, height, width, channels), add a dimension because the model expects this shape: (batch_size, height, width, channels)
            # img  /= 255   
            img=img.reshape(1,150,150,1)
        #final_features = np.array(img)
        #final_features=final_features.reshape(1,150,150,1)
            model =keras.models.load_model('weights.h5')
            prediction = model.predict(img)
            if(prediction[0]>0.5):
                result='YES,you are suffering from Pneumonia'
            else:
                result='NO,you arent suffering from Pneumonia'        
        
         
        elif(disease=='Retinal_Disease'):
            test_transforms = A.Compose([A.Resize(1424, 2144),A.Normalize(mean=(0.485, 0.456, 0.406), std=(0.229, 0.224, 0.225)),ToTensorV2()])
            image = Image.open(file_path).convert('RGB')
            img = np.array(image)
            image = test_transforms(image=img)["image"]
            image=image.reshape(1,3,1424, 2144)
            
            
            model = torchvision.models.vgg16(pretrained=False)   
            model.classifier[6] = nn.Linear(4096,46)
            model.load_state_dict(torch.load('retinal_disease.pt'))            
            
            predict=model(image).detach().numpy()
            l= [ 'DR', 'ARMD', 'MH', 'DN', 'MYA', 'BRVO', 'TSLN',
       'ERM', 'LS', 'MS', 'CSR', 'ODC', 'CRVO', 'TV', 'AH', 'ODP', 'ODE', 'ST',
       'AION', 'PT', 'RT', 'RS', 'CRS', 'EDN', 'RPEC', 'MHL', 'RP', 'CWS',
       'CB', 'ODPM', 'PRH', 'MNF', 'HR', 'CRAO', 'TD', 'CME', 'PTCR', 'CF',
       'VH', 'MCA', 'VS', 'BRAO', 'PLQ', 'HPED', 'CL'] 
            sum1=0
            for i in range(46):
                predict[0][i]=np.exp(predict[0][i])
                sum1+=predict[0][i]
            for i in range(46):
                predict[0][i]= (predict[0][i])/sum1
            dise=l[np.argmax(predict[0][1:])]
            temp=predict[0][0]
            if(temp<0.6):
                result="Your eyes are fine!"
            else:
                result="You are suffering from "+ dise


 
        
        # Serialize the result, you can add additional fields
        return jsonify(result=result)
    return None




if __name__ == '__main__':
    app.run()
 


if __name__ == "__main__":
    app.run(debug=True)