/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import AddItemModal from '../modals/AddItemModal';
import {useState, useEffect} from 'react';
import MerchantForehead from '../../objects/MerchantForeheadView';
import {IRootState} from '../../app/store';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Calendar} from 'react-native-calendars';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SelectDropdown from 'react-native-select-dropdown';
import {SelectItem} from '@ui-kitten/components';

export default function AddScreen({}) {
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [Texts, onChangeTexts] = React.useState('');
  const [result, setResult] = React.useState<any>([]);
  const [name, setName] = useState('');

  // get all data form DB
  const [ProductList, setProductList] = React.useState<Array<any>>([]);
  const [VersionList, setVersionList] = React.useState<Array<any>>([]);
  const [SelectedProduct, setSelectProduct] = React.useState(null);
  const [SelectedVersion, setSelectVersion] = React.useState(null);
  const [ItemPosted, setItemPosted] = React.useState(false);

  // ---------------------------------------------------------------------------------------------------------
  // POST function variable for upload items
  const [end_date, onChangeDate] = React.useState('');
  console.log(end_date);

  const [price, onChangePrice] = React.useState('');
  const [stock_status, setStatus] = React.useState('');
  const status = ['預購中', '大量現貨', '尚有現貨', '少量現貨'];
  // const [stock_status, setStatus] = React.useState('');
  const [availability, setAvailability] = React.useState(true);
  // ---------------------------------------------------------------------------------------------------------
  // search bar function

  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<
    Array<{id: number; product_name: string}>
  >([]);
  // const [isModalVisible, setIsModalVisible] = React.useState(false);

  const performSearch = (query: any) => {
    const results: any = ProductList.filter(item =>
      item.product_name.includes(query),
    );
    setSearchResults(results);
  };
  const renderSearchResults = () => {
    if (searchQuery === '') {
      return null;
    }
    return searchResults.map(item => (
      <TouchableOpacity
        key={item.id}
        onPress={() => passProductSelect(item.id)}>
        <Text>{item.product_name}</Text>
      </TouchableOpacity>
    ));
  };

  const handleDropdownSelect = (status: any) => {
    setStatus(status);
  };

  // ---------------------------------------------------------------------------------------------------------
  // refresh function
  const refreshFunction = () => {
    // 重置狀態和清除數據的操作
    setSearchQuery('');
    setSearchResults([]);
    setSelectProduct(null);
    setSelectVersion(null);
    onChangePrice('');
    setStatus('');
    setAvailability(true);
  };
  // ---------------------------------------------------------------------------------------------------------

  //function for pass product and version id to run post item
  const passProductSelect = (productId: any) => {
    setSelectProduct(productId);
    console.log('selected product id: ', productId);
  };

  const passVersionSelect = (versionId: any) => {
    setSelectVersion(versionId);
    console.log('selected version id: ', versionId);
  };

  const itemUpload = async (merchantId: any) => {
    const getUserData = async () => {
      const resp = await fetch(
        `http://192.168.160.77:3000/merchant/userInfo/${userId}`,
        {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        },
      );
      const data = await resp.json();
      setName(data[0].merchant_name);
      getMerchantId(data[0].id);
      console.log('get user data: ', data);
    };
    getUserData();

    const getMerchantId = async (merchantId: any) => {
      const resp = await fetch(
        `http://192.168.160.77:3000/merchant/${merchantId}`,
        {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        },
      );
      const merData = await resp.json();
      console.log('攞到merchant data:', merData);
      itemPost(merData[0].id);
    };

    const itemPost = async (merchantId: any) => {
      const itemPost = {
        // product_id: SelectedProduct,
        version_id: SelectedVersion,
        end_date: end_date,
        price: price,
        stock_status: stock_status,
        availability: availability,
        merchant_id: merchantId,
      };
      console.log('我post野啦: ', itemPost);

      await fetch(`http://192.168.160.77:3000/merchant/uploadItems`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemPost),
      })
        .then((response: any) => response.json())
        .then(data => {
          console.log('Item successfully posted:', data);
          setItemPosted(true);
        });
      console.log('got you merchant: ');
    };
  };

  useEffect(() => {
    const getProduct = async () => {
      const getProduct = await fetch(
        'http://192.168.160.77:3000/merchant/product',
      );
      const productList = await getProduct.json();

      setProductList(productList);
    };

    const getVersion = async () => {
      const getVersion = await fetch(
        'http://192.168.160.77:3000/merchant/product/version',
      );
      const versionList = await getVersion.json();

      setVersionList(versionList);
    };

    getProduct();
    getVersion();
  }, []);

  useEffect(() => {
    if (ItemPosted) {
      Alert.alert('Upload Success');
      refreshFunction();
      setItemPosted(false);
    }
  }, [ItemPosted]);

  // ---------------------------------------------------------------------------------------------------------

  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        <MerchantForehead name={name} />
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20}}>增加商品</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={styles.subTitle}>
          <Icon name={'cube'} size={20} color={'#E4E4E4'} />
          <Text style={styles.subTitleText}>遊戲</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {/* <Text>Product:</Text> */}

          {/* try */}
          <View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: 300,
                borderRadius: 10,
                justifyContent: 'space-between',
              }}>
              <TextInput
                placeholder="請輸入遊戲名稱"
                value={searchQuery}
                onChangeText={text => {
                  setSearchQuery(text);
                  performSearch(text);
                }}
                style={{
                  fontSize: 20,
                }}
              />
              <FontAwesome5
                name="search"
                size={30}
                style={{alignSelf: 'center'}}
              />
            </View>

            <View>{renderSearchResults()}</View>
          </View>
          {/* try */}

          {SelectedProduct && searchQuery !== '' && (
            <>
              <Text>Version:</Text>
              {VersionList.filter(
                version => version.product_id === SelectedProduct,
              ).map(item => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => passVersionSelect(item.id)}>
                  <Text>{item.version}</Text>
                </TouchableOpacity>
              ))}
            </>
          )}

          {SelectedProduct && SelectedVersion && searchQuery !== '' && (
            <>
              <View style={styles.subTitle}>
                <Icon name={'list'} size={20} color={'#E4E4E4'} />
                <Text style={{width: 80, marginLeft: 10, fontSize: 20}}>
                  項目
                </Text>
              </View>
              <View>
                <View style={{marginBottom: 10}}>
                  <Text style={gameListStyles.itemName}>{String(result)}</Text>
                  <View style={gameListStyles.itemInfoBox}>
                    <View style={gameListStyles.itemInfoList}>
                      <View style={gameListStyles.itemInfoIcon}>
                        <Icon
                          name={'dollar-sign'}
                          size={20}
                          color={'#E4E4E4'}
                        />
                      </View>
                      <Text style={{fontSize: 20}}>目標售價：</Text>
                    </View>
                    <View style={{alignItems: 'center', flexDirection: 'row'}}>
                      <Text style={{marginRight: 10, fontSize: 20}}>HK$</Text>
                      <View
                        style={{
                          width: 80,
                          borderBottomWidth: 1,
                          borderBottomColor: '#B7C1DE',
                        }}>
                        <TextInput
                          style={{fontSize: 20, padding: 0}}
                          value={price}
                          onChangeText={onChangePrice}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={gameListStyles.itemInfoBox}>
                    <View style={gameListStyles.itemInfoList}>
                      <View style={gameListStyles.itemInfoIcon}>
                        <Icon name={'box-open'} size={20} color={'#E4E4E4'} />
                      </View>
                      <Text style={{fontSize: 20}}>存貨情況：</Text>
                    </View>

                    <SelectDropdown
                      data={status}
                      onSelect={handleDropdownSelect}
                      buttonTextAfterSelection={selectedItem => {
                        return selectedItem;
                      }}
                      rowTextForSelection={item => {
                        return item;
                      }}
                    />

                    <TextInput
                      style={{fontSize: 20}}
                      value={stock_status}
                      onChangeText={setStatus}
                      editable={false}
                    />
                  </View>
                </View>
              </View>

              <View>
                <Calendar
                  onDayPress={day => {
                    onChangeDate(day.dateString);
                  }}
                  markedDates={{
                    [end_date]: {
                      selected: true,
                      disableTouchEvent: true,
                      selectedColor: 'orange',
                    },
                  }}
                />
              </View>

              <TouchableOpacity
                style={{backgroundColor: 'red', marginBottom: 100}}>
                <Button onPress={itemUpload} title="Submit Form" />
              </TouchableOpacity>
            </>
          )}
          {ItemPosted}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 10,
    paddingLeft: 10,
    width: 350,
    borderLeftWidth: 3,
    borderColor: '#7D7D7D',
  },
  pageTitleLine: {
    position: 'absolute',
    bottom: -3,
    left: 60,
    width: 100,
    borderBottomWidth: 3,
    borderColor: '#7A04EB',
  },
  subTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    marginBottom: 0,
    marginTop: 10,
    paddingLeft: 10,
    width: 350,
  },
  subTitleText: {width: 80, marginLeft: 10, fontSize: 20},
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    paddingLeft: 10,
    paddingRight: 10,
    height: 45,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
});

const gameListStyles = StyleSheet.create({
  itemName: {fontSize: 20, borderBottomWidth: 3, borderBottomColor: '#7D7D7D'},
  itemInfoBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 300,
    marginBottom: 10,
  },
  itemInfoList: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 130,
  },
  itemInfoIcon: {width: 25, alignItems: 'center', justifyContent: 'center'},
  itemInfoPrice: {
    alignItems: 'flex-end',
    width: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#B7C1DE',
  },
  itemSelectBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: 140,
    backgroundColor: '#202124',
    borderWidth: 2,
    borderColor: '#B7C1DE',
    borderRadius: 10,
  },
});

const dropStyles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

{
  /* <TouchableOpacity
          onPress={() => {
            setIsClicked(!isClicked);
          }}>
          <Text>{selectedProduct}</Text>
          {isClicked}
        </TouchableOpacity>
        {isClicked ? (
          <View
            style={{
              width: '90%',
              height: 300,
              borderRadius: 10,
              marginTop: 20,
              backgroundColor: '#fffff',
              elevation: 5,
              alignSelf: 'center',
            }}>
            <TextInput
              placeholder="Search"
              style={{
                width: '90%',
                height: 50,
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: '#8e8e8e',
                alignSelf: 'center',
                marginTop: 20,
                paddingLeft: 15,
              }}
              onChangeText={txt => onSearch(txt)}
            />
            <FlatList
              data={productData}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: '85%',
                      height: 50,
                      borderBottomWidth: 0.2,
                      borderBottomColor: '#8e8e8e',
                      alignSelf: 'center',
                    }}
                    onPress={() => {
                      setSelectedProduct(item.product_name);
                      onSearch('');
                      setIsClicked(false);
                      passProductId(item.id);
                      setResult({id: item.id, name: item.name});
                    }}>
                    <Text>{item.product_name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null} */
}

{
  /* <Select>
          {productList.map(() => (
            <SelectItem />
          ))}
        </Select> */
}
{
  /* 
        <View style={{width: 350}}>
          <View style={styles.inputBox}>
            <TextInput
              style={{fontSize: 15, padding: 0}}
              onChangeText={onChangeText}
              value={text}
              placeholder="請輸入遊戲名稱"
            />
            <Icon name={'search'} size={25} color={'#E4E4E4'} />
          </View>
        </View> */
}
