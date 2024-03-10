import React from "react";
import "./ArticlePage.css";
import { useSelector } from "react-redux";
import Count from "../components/Count";

const ArticlePage = () => {
    const count = useSelector((state) => state.count);
    return (
        <>
        <Count />
        </>
    );
}

export default ArticlePage;