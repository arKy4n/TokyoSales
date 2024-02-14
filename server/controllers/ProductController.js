const express = require('express');
const pool = require('../db');

const UploadImage =async(req,res)=>{
try{
    console.log(req.body);
    console.log(req.files);
    const { originalname, filename } = req.file;
    const filePath = `C:\\Users\\Bhavan\\Desktop\\DevelopmentProjects\\TokyoSales\\server\\ImageUploads\\${filename}`;    
    const insertQuery = 'INSERT INTO images (name,file_path) VALUES ($1,$2) RETURNING id'
    const { rows } = await pool.query(insertQuery,[originalname,filePath]);
    res.status(200).json({id: rows[0].id});
}
catch(error){
    console.error('error uploading image',error);
    res.status(500).json({error:'Internal server error'});
}
};

module.exports ={
    UploadImage
};



