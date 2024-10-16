import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';
import { Header, Footer, Typeahead } from '@raviganesh12/my-component-library/index';
const App = () => {
  const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

  const handleSelect = (item: string) => {
    console.log('Selected item:', item);
  };

  return (
    <SafeAreaView style={styles.container}>
     
      <Header
        title="Welcome to ComputerShare"
        subtitle="World leaders in financial administration"
        logo="https://content-images.computershare.com/eh96rkuu9740/646f8d16589244aaa580ff29acfd0268/1de71dabc0eba04a065a9e8ee2c7a495/CPU_logo-scroll.png" // Replace with your logo URL or local path
      />
       <Text style={styles.welcome}>IO5 Web App!</Text>

       <Typeahead
        data={data}
        placeholder="Search for a fruit..."
        onSelect={handleSelect}
      />
       <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </ScrollView>
     
      <Footer
        footerText="© 1996 - 2024 Computershare Limited. All rights reserved."
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
