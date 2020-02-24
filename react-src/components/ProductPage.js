import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../mapStateDispatch'
import { Grid, Paper, Button } from '@material-ui/core'
import constants from '../constants/constants'
import axios from 'axios'

class ProductPage extends Component {

  componentDidMount() {
    this.props.checkSession(this.props.getProductList())
  }

  render() {
    return (
      <>
        {
          this.props.userData && this.props.userState == constants.USER_LOGGED_IN
          ?
            <Button
              color='default'
              variant='contained'
              style={{
                position: 'absolute',
                top: '4px', right: '8px',
              }}
              onClick={() => this.props.logout(this.props.history.push('/login'))}>
              Log out
            </Button>
          :
            <Button
              color='default'
              variant='contained'
              style={{
                position: 'absolute',
                top: '4px', right: '8px',
              }}
              onClick={() => this.props.history.push('/login')}>
              Log in
            </Button>
        }
        <h1>
          Product List - Menu
        </h1>
        {
          this.props.productsDataFile && this.props.userData && this.props.windowDimensions.innerWidth > 767
          ? <Grid container spacing={3}>
              {
                this.props.productsDataFile.map(product => (
                  <Grid item xs={4} key={product.name} className='product-container'>
                    <Paper style={{ padding: '10px' }}>
                      <div className='product-name padding-5'>{product.name}</div>
                      <div className='product-description padding-5'>{product.description}</div>
                      {/* product.name == 'Lava Cake' ? <><br/></> : null */}
                      <div className='product-image-outer padding-5'>
                        <img className='product-image' src={product.image}/>
                      </div>
                      <div className='product-price padding-5'>{product.price}</div>
                    </Paper>
                  </Grid>
                ))
              }
            </Grid>
          :
            this.props.productsDataFile && this.props.userData && this.props.windowDimensions.innerWidth < 767
            ? <>
                <Grid container spacing={3}>
                  {
                    this.props.productsDataFile.map(product => (
                      <Grid item xs={12} key={product.name} className='product-container'>
                        <Paper style={{ padding: '10px' }}>
                          <div className='product-name padding-10'>{product.name}</div>
                          <div className='product-description padding-10'>{product.description}</div>
                          <div className='product-image-outer padding-10'>
                            <img className='product-image' src={product.image}/>
                          </div>
                          <div className='product-price padding-10'>{product.price}</div>
                        </Paper>
                      </Grid>
                    ))
                  }
                </Grid>
              </>
            :
              this.props.loadingDataFile
              ? <><div className='padding-10'>loading JSON file...</div></>
              : <><div className='padding-10'>Please log in to see the product list.</div></>
        }
      </>
    )
  }

}

export default connect(mapState, mapDispatch)(withRouter(ProductPage))
