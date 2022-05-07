from datetime import datetime
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


# Get configs from config file
stream = open("config.yaml", 'r')
config_dict = yaml.safe_load(stream)
batch_size = config_dict['batch_size']
learning_rate = config_dict['lr']
model_pth = config_dict['model_pth']
train_data = config_dict['train_data']
valid_data = config_dict['valid_data']
test_data = config_dict['test_data']


# gives training example count of cat_num
def no_examples(cat_name = 'covid', print_bool=True, dataset='train'):
    assert dataset in ['train', 'valid'], "dataset = 'train' or 'valid'"
    assert cat_name in ['covid', 'non'], "cat_name = 'covid' or 'non'"

    root_dir = '.'
    cat_path = os.path.join(root_dir, dataset, str(cat_name))
    num_files = len([name for name in os.listdir(cat_path)])
    if print_bool:
        print(f"There are {num_files} images in category of {cat_name} in {dataset}")
    else:
        return num_files


# shows image for cat_name
def show_im(cat_name, im_no=1, dataset='train', print_dim=True):
    assert dataset in ['train', 'valid'], "dataset = 'train' or 'valid'"

    no_examp = no_examples(cat_name, print_bool=False, dataset=dataset)
    assert im_no <= no_examp, "Image number out of range"

    root_dir = '.'
    cat_path = os.path.join(root_dir, dataset, str(cat_name))
    num_files = [name for name in os.listdir(cat_path)]
    im_path = os.path.join(cat_path, num_files[im_no])
    name_img = cat_name + " Image: " + str(im_no)
    image = read_image(im_path)
    image = image.numpy().transpose((1, 2, 0))
    if print_dim:
        print(f"The dimensions of image are {image.shape}")
    plt.imshow(image)
    plt.title(name_img)
    plt.axis('off')
    plt.show()

no_examples(cat_name = 'covid', print_bool=True, dataset='train')
no_examples(cat_name = 'non', print_bool=True, dataset='train')
no_examples(cat_name = 'covid', print_bool=True, dataset='valid')
no_examples(cat_name = 'non', print_bool=True, dataset='valid')


# saves model and returns its path.
def save_model(model, name="unknown", path=model_pth):
    """

    :param model: Model object to be saved
    :param name: Name of model
    :param path: Path where model is saved
    :return: Path of saved Model object
    """
    now = datetime.now()
    date, _ = str(now).split()
    dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
    _, time = dt_string.split()
    hr, minutes, sec = time.split(":")
    time_right = hr + "." + minutes
    name_model = name + '_' + time_right + '_' + date + '.pth'

    torch.save(model, os.path.join(path, name_model))
    return os.path.join(path, name_model)

def pil_loader(path):
    with open(path, 'rb') as f:
        img = Image.open(f)
        return img.convert('RGB')
