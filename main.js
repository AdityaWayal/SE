//JavaScript
const express =require("express");
const app=express();

const cors =require('cors')
app.use(cors())

const selectElement = (element) => document.querySelector(element);


selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});




