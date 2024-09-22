
# 🛠️ HODLINFO Clone

### 🌐 **Live Link**: [HODLINFO Clone](https://uzer-hodlinfo-assignment.netlify.app/)

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/a94041b9-e629-45ae-ab90-0be97c66d1ef)

The webpage mimics the design and functionality of hodlinfo.com with an identical layout (90% similarity). It displays the name, last price, buy price, sell price, volume, and base unit for the top 10 cryptocurrencies.

---

## 🚀 **Features**
- 🌟 **Frontend** built with HTML and CSS, replicating the hodlinfo.com interface.
- ⚙️ **Backend** built with Node.js and Express.js.
- 📊 Fetches top 10 cryptocurrency results from the **WazirX API** and stores relevant data in a **MongoDB** database.
- 🛠️ Provides an API route to retrieve the stored data and display it on the frontend.

---

## 🛠️ **Technologies Used**
- **Frontend**: HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: WazirX API (https://api.wazirx.com/api/v2/tickers)

---

## 🔗 **API Endpoints**
- **GET** : `/api/v1/data` : Fetches the top 10 cryptocurrencies stored in the database, including the following fields:
  - 🪙 Name
  - 💰 Last Price
  - 🛒 Buy Price
  - 🛍️ Sell Price
  - 📈 Volume
  - 🪙 Base Unit

---

## 🛠️ **Installation and Setup**

### 📥 **Clone the repository**:
```bash
git clone https://github.com/08Uzair/HODLINFO_ASSIGNMENT.git
cd hodlinfo-clone
```

### 📦 **Install dependencies**:
```bash
npm install
```

### 🛠️ **Database Setup**:
Set up your MongoDB or PostgreSQL database before running the server.

### ▶️ **Run the server**:
```bash
npm start
```

---

## 🌐 **Access the application**:
Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the hodlinfo clone page.

---

## 🎯 **Submission**
This project was submitted as part of the NodeJS Developer Internship test.

---
