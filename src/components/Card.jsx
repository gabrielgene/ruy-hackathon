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
  },
  progress:{
    background: 'red',
    marginVertical: 18,
  },
};

class CardFruit extends Component {
  render() {
    const { link, onClick, image, classes } = this.props;
    console.log(styles.card)
    return (
      <div>
        <Card>
          <Link style={{ textDecoration: 'none' }} to={link} onClick={onClick}>
            <CardActionArea>
              <CardContent style={styles.card} className="card">
                <img style={{ width: '100%', marginBottom: -4, }} src={image} alt="product" />
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(CardFruit);
