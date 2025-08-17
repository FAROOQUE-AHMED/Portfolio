import React from "react";
import android from "../../public/android.png";
import aspnet from "../../public/aspnet.png";
import c from "../../public/c.png";
import cpp from "../../public/cpp.png";
import csharp from "../../public/csharp.png";
import css from "../../public/css.jpg";
import express from "../../public/express.png";
import firebase from "../../public/firebase.png";
import git from "../../public/git.png";
import github from "../../public/github.png";
import html from "../../public/html.png";
import inteljidea from "../../public/inteljidea.png";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import jetpack from "../../public/jetpack.png";
import kotlin from "../../public/kotlin.png";
import ml from "../../public/ml.png";
import mongodb from "../../public/mongodb.jpg";
import mssql from "../../public/mssql.png";
import mysql from "../../public/mysql.png";
import node from "../../public/node.png";
import oracle from "../../public/oracle.png";
import php from "../../public/php.png";
import python from "../../public/python.png";
import reactjs from "../../public/reactjs.png";
import sdk from "../../public/sdk.png";
import tensorflow from "../../public/tensorflow.png";
import unity from "../../public/unity.png";
import vscode from "../../public/vscode.png";
import vuejs from "../../public/vuejs.png";

function Experiance() {
  const cardItem = [
    { id: 1, logo: android, name: "Android" },
    { id: 2, logo: jetpack, name: "Jetpack" },
    { id: 3, logo: kotlin, name: "Kotlin" },
    { id: 4, logo: html, name: "HTML" },
    { id: 5, logo: css, name: "CSS" },
    { id: 6, logo: javascript, name: "JavaScript" },
    { id: 7, logo: c, name: "C" },
    { id: 8, logo: cpp, name: "C++" },
    { id: 9, logo: csharp, name: "C#" },
    { id: 10, logo: java, name: "Java" },
    { id: 11, logo: python, name: "Python" },
    { id: 12, logo: php, name: "PHP" },
    { id: 13, logo: mongodb, name: "MongoDB" },
    { id: 14, logo: mssql, name: "MSSQL" },
    { id: 15, logo: mysql, name: "MySQL" },
    { id: 16, logo: firebase, name: "Firebase" },
    { id: 17, logo: git, name: "Git" },
    { id: 18, logo: github, name: "GitHub" },
    { id: 19, logo: oracle, name: "Oracle" },
    { id: 20, logo: tensorflow, name: "TensorFlow" },
    { id: 21, logo: sdk, name: "SDK" },
    { id: 22, logo: ml, name: "Machine Learning" },
    { id: 23, logo: inteljidea, name: "IntelliJ IDEA" },
    { id: 24, logo: vscode, name: "VS Code" },
    { id: 25, logo: unity, name: "Unity" },







  ];

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
            >
              <img src={logo} className="w-[150px] rounded-full" alt={name} />
              <div>{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
