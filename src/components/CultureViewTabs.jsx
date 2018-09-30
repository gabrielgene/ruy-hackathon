import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class CultureViewTabs extends React.Component {
  // state = {
  //   value: 'one',
  // };

  // handleChange = (event, value) => {
  //   this.setState({ value });
  // };

  render() {
    return (
      <Tabs
        value={this.props.value}
        onChange={this.props.handleChange}
        fullWidth
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab value="one" label="Guia" />
        <Tab value="two" label="Sintropia" />
        <Tab value="three" label="Dicas" />
      </Tabs>
    )
  }
}

export default CultureViewTabs;
