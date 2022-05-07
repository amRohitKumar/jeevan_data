import MLImage from '../../assets/images/machine-learning-feature.jpg';
import ReportImage from '../../assets/images/health-record-feature.jpg';
import ArticleImage from '../../assets/images/health-articles-feature.jpg';
import InternetImage from '../../assets/images/internet-feature.jpg';
import ChatImage from '../../assets/images/livechat-feature.jpg';
import LanguageImage from '../../assets/images/language-feature.jpg';


export const featuresArray = [
    {
        key: 1,
        heading: "Instant Diagnosis based on ML",
        content: 'Using Machine learning techniques,a patient will be able to get an accurate description of what type of disease they might be suffering from,nearest available doctors specializing in that particular disease,what precautions should be taken,by uploading the MRI scans,CT scans etc.',
        imageUrl: `${MLImage}`
    },
    {
        key: 2,
        heading: "Record of previous health reports",
        content: 'A completely digitized record will be kept of the previous health reports of a patient.These reports will be easily accessible for future reference.',
        imageUrl: `${ReportImage}`
    },
    {
        key: 3,
        heading: "Regular articles about health",
        content: 'We aim to accelerate closing the bench-to-bedside gap and improve global health standards. Articles regarding health awareness like cleanliness,Eating habits etc will be provided on a daily basis to instill knowledge among the masses.',
        imageUrl: `${ArticleImage}`
    },
    {
        key: 4,
        heading: "Can access from everywhere",
        content: "It's all about convenience, you have remote access to everything. This application will be accessible from everywhere.Only Internet connection will be required to access it.",
        imageUrl: `${InternetImage}`
    },
    {
        key: 5,
        heading: "Can live chat with experts from different specializations",
        content: 'The longer the meeting, the less us accomplished. So you can meet doctors through live chat. Doctors/Experts will be available to clear queries (virtually) through chatting.This mechanism will reduce travel cost as save time.',
        imageUrl: `${ChatImage}`
    },
    {
        key: 6,
        heading: "Articles available in different regional languages",
        content: 'Language is the blood of the soul into which thoughts run and out of which they grow. Articles related to healthcare will be available in different regional languages,so that we can benefit a large section of society.',
        imageUrl: `${LanguageImage}`
    }
];