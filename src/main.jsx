// src/main.jsx


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"

import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import { createRoot } from "react-dom/client"

const root = document.getElementById("root");

createRoot(root).render(<App/>);