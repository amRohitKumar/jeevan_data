from datetime import datetime
import yaml
import numpy as np   # linear algebra
import pandas as pd  # data processing, CSV file I/O (e.g. pd.read_csv)
import os
import torch
import torchvision
import sklearn
import matplotlib.pyplot as plt
import seaborn as sns
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader
import torchvision.transforms as transforms
from torchvision import datasets, models
from torchvision.io import read_image
import math
import torch.optim as optim
from torch.optim import lr_scheduler
import copy
import time
from PIL import Image

from utils import *
from model import *

data_dir = '.'



# Get configs from config file
stream = open("config.yaml", 'r')
config_dict = yaml.safe_load(stream)
batch_size = config_dict['batch_size']
learning_rate = config_dict['lr']
model_pth = config_dict['model_pth']
train_data = config_dict['train_data']
valid_data = config_dict['valid_data']
test_data = config_dict['test_data']

image_datasets = {x: datasets.ImageFolder(os.path.join(data_dir, x),
                                          data_transforms[x])
                  for x in ['train', 'valid']}
dataloaders = {x: torch.utils.data.DataLoader(image_datasets[x], batch_size=batch_size, shuffle=True, num_workers=0)
                                    for x in ['train', 'valid']}

dataset_sizes = {x: len(image_datasets[x]) for x in ['train', 'valid']}
class_names = image_datasets['train'].classes
device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")

class_to_idx = image_datasets['valid'].class_to_idx
idx_to_class = {val: key for key, val in class_to_idx.items()}

# Load Pretrained model for fine tuning
model_pt = torchvision.models.densenet201(pretrained=True)
for params in model_pt.parameters():
    params.requires_grad = False

# Load Model to device
model_ft1 = model_pt.to(device)
model_sub3 = nn.Sequential(model_ft1,
                           nn.Flatten(),
                           nn.Linear(1000, 2)

                           ).to(device)

# Define Optimizer and Loss
optimizer_ft = optim.SGD(model_sub3.parameters(), lr=learning_rate)
criterion = nn.CrossEntropyLoss()

# Train model
model_trained = train_model2(model_sub3, criterion, optimizer_ft, num_epochs=10, print_progress=True)

# Saves model
train_model_path = save_model(model_trained, "DenseNet")
