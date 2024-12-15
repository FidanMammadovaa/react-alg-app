import React from "react"
import Header from "../header"
import Main from "../main"

import styles from './index.module.css'
import { Outlet } from "react-router"
export default function Layout() {
    return (<div className={styles.container}>
        <Header />
        <Main>
            <Outlet />
        </Main>
    </div>)
}