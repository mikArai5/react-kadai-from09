import React from "react";
import "./TopPage.css";
import { useLocation } from "react-router-dom";

const TopPage = () => {
    const pathname = useLocation().pathname;

    return (
        <>
        <div className="main">
            <div>
                <h1>トップページ</h1>
                <p>現在のパス:{pathname}</p>
            </div>
            <div className="contents">
                <div className="boxes">
                    <div className="box">
                        <h3 className="ttl">Fluxアーキテクチャのメリット</h3>
                        <p>
                            単方向のデータフローを構築できることが最大の特徴で、
                            開発規模が大きくなってもデータの流れを見失いづらいことが大きなメリット
                        </p>
                    </div>
                    <div className="box">
                        <h3 className="ttl">Fluxアーキテクチャのデメリット</h3>
                        <p>
                            単方向のデータフローを構築できることが最大の特徴で、
                            開発規模が大きくなってもデータの流れを見失いづらいことが大きなメリット
                        </p>
                    </div>
                </div>
                <div className="boxes">
                    <div className="box">
                        <h3 className="ttl">Action</h3>
                        <p>
                            状態を更新するための指示内容を表すメッセージ
                        </p>
                    </div>
                    <div className="box">
                        <h3 className="ttl">Dispatcher</h3>
                        <p>
                            Storeに対してActionによる更新指示を行う関数
                        </p>
                    </div>
                    <div className="box">
                        <h3 className="ttl">Store</h3>
                        <p>
                            アプリケーションの状態データを保持するオブジェクト、状態の更新を実施する処理
                        </p>
                    </div>
                    <div className="box">
                        <h3 className="ttl">View</h3>
                        <p>
                            状態の更新内容である「Action」を関数である「Dispatcher」で「Store」に伝えて状態を更新し、
                            その結果を「View(React)」に伝えるという流れ
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default TopPage;