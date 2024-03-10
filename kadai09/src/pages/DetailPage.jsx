import React from "react";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
    const pathname = useLocation().pathname;
    return (
        <>
        <h1>記事詳細</h1>
        <p>現在のパス:{pathname}</p>
        </>
    );
};

export default DetailPage;