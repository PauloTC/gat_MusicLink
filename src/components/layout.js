import React from "react"
import Header from './header'
import 'antd/dist/antd.css'; 
import { ThemeProvider } from '@material-ui/styles';
import theme from "../theme/muiTheme"
import Footer from '../components/footer'
import { makeStyles } from "@material-ui/core/styles"
import './layout.css'
const useStyles = makeStyles({
  main: {
    minHeight:  'calc( 100vh - 120px )'
  }
})

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
      <>
        <ThemeProvider theme={theme}>
          <Header />
          <main className={classes.main} >{children}</main>
          <Footer />
        </ThemeProvider>
      </>

  )
}
  

export default Layout