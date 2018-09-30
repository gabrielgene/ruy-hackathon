import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom'

const styles = {
  image: {
    width: '100%',
    marginBottom: -4,
  },
  card: {
    width: '100%',
    backgroundColor: '#357a38',
    color: 'white',
    padding: 0,
    margin:0,
    minHeight: 114,
  },
  progress:{
    background: 'red',
    marginVertical: 18,
  },
};

// #goHorse
const microHocWithLink = ({link, image, classes}) => (
  <Link style={{ textDecoration: 'none' }} to={link}>
    <CardActionArea>
      <CardContent className={classes.card}>
        <img style={{ width: '100%', marginBottom: -4, }} src={image} alt="product" />
      </CardContent>
    </CardActionArea>
  </Link>
);

class CardFruit extends Component {
  render() {
    const { link, image, classes } = this.props;
    return (
      <div>
        <Card>
          {
            link ? microHocWithLink(this.props) :
            <CardActionArea>
              <CardContent className={classes.card}>
                <img style={{ width: '100%', marginBottom: -4, }} src={image} alt="product" />
              </CardContent>
            </CardActionArea>
          }

        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(CardFruit);
