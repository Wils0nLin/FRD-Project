/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import MerchantForehead from '../../objects/MerchantForeheadView';
import {IRootState} from '../../app/store';
import {Calendar} from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SelectDropdown from 'react-native-select-dropdown';

export default function AddScreen({}) {
  const userId = useSelector((state: IRootState) => state.auth.userId);
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
  const unique = (arr: Array<any>, track = new Set()) =>
    arr.filter(({product_name}) =>
      track.has(product_name) ? false : track.add(product_name),
    );
  const unique2 = (arr: Array<any>, track = new Set()) =>
    arr.filter(({version}) =>
      track.has(version) ? false : track.add(version),
    );
  const performSearch = (query: any) => {
    console.log('hi', query);
    const results: any = ProductList.filter(item =>
      item.product_name.includes(query),
    );
    console.log();
    setSearchResults(unique(results));
  };
  const renderSearchResults = () => {
    if (searchQuery === '') {
      return null;
    }
    return searchResults.map(item => (
      <TouchableOpacity
        style={styles.screenButtonFor1}
        key={item.id}
        onPress={() => passProductSelect(item.id)}>
        <Text style={{fontSize: 17, color: '#E4E4E4'}}>
          {item.product_name}
        </Text>
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

  const itemUpload = async () => {
    const getUserData = async () => {
      const resp = await fetch(
        `http://13.213.207.204/merchant/userInfo/${userId}`,
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
      const resp = await fetch(`http://13.213.207.204/merchant/${merchantId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      });
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

      await fetch('http://13.213.207.204/merchant/uploadItems', {
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
      const getProduct = await fetch('http://13.213.207.204/merchant/product');
      const productList = await getProduct.json();

      setProductList(productList);
    };

    const getVersion = async () => {
      const getVersion = await fetch(
        'http://13.213.207.204/merchant/product/version',
      );
      const versionList = await getVersion.json();
      console.log(versionList);
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
          <Ionicons
            name={'game-controller-outline'}
            size={20}
            color={'#E4E4E4'}
          />
          <Text style={styles.subTitleText}>遊戲選擇</Text>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.textInput}
            value={searchQuery}
            onChangeText={text => {
              setSearchQuery(text);
              performSearch(text);
            }}
            placeholder="請輸入遊戲名稱"
          />
          <FontAwesome5 name={'search'} size={25} color={'#E4E4E4'} />
        </View>
        <View>
          <View>{renderSearchResults()}</View>
        </View>
        <View style={styles.subTitle}>
          <FontAwesome5 name={'list'} size={20} color={'#E4E4E4'} />
          <Text style={styles.subTitleText}>遊戲版本</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {/* try */}

          {SelectedProduct && searchQuery !== '' && (
            <>
              {unique2(
                VersionList.filter(
                  version => version.product_id === SelectedProduct,
                ),
              ).map(item => (
                <TouchableOpacity
                  style={styles.screenButtonFor1}
                  key={item.id}
                  onPress={() => passVersionSelect(item.id)}>
                  <Text style={{fontSize: 17, color: '#E4E4E4'}}>
                    {item.version}
                  </Text>
                </TouchableOpacity>
              ))}
            </>
          )}

          {SelectedProduct && SelectedVersion && searchQuery !== '' && (
            <>
              <View style={styles.subTitle}>
                <FontAwesome5
                  name={'folder-open'}
                  size={20}
                  color={'#E4E4E4'}
                />
                <Text style={{width: 80, marginLeft: 10, fontSize: 20}}>
                  商品資料
                </Text>
              </View>
              <View>
                <View style={{marginBottom: 10}}>
                  <Text style={gameListStyles.itemName}>{String(result)}</Text>
                  <View style={gameListStyles.itemInfoBox}>
                    <View style={gameListStyles.itemInfoList}>
                      <View style={gameListStyles.itemInfoIcon}>
                        <FontAwesome5
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
                        <FontAwesome5
                          name={'box-open'}
                          size={20}
                          color={'#E4E4E4'}
                        />
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
                      buttonStyle={styles.modalDropList}
                      defaultButtonText={'請選擇'}
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
              <View style={styles.subTitle}>
                <FontAwesome5
                  name={'calendar-times'}
                  size={20}
                  color={'#E4E4E4'}
                />
                <Text style={{width: 120, marginLeft: 10, fontSize: 20}}>
                  停止預購日期
                </Text>
              </View>

              <View>
                <Calendar
                  style={{
                    width: 300,
                    marginLeft: 15,
                  }}
                  onDayPress={day => {
                    onChangeDate(day.dateString);
                  }}
                  markedDates={{
                    [end_date]: {
                      selected: true,
                      disableTouchEvent: true,
                    },
                  }}
                  theme={{
                    selectedDayBackgroundColor: '#ffffff',
                    selectedDayTextColor: '#7A04EB',
                    calendarBackground: '#2A2E32',
                    dayTextColor: '#E4E4E4',
                    todayTextColor: '#defe47',
                    monthTextColor: '#E4E4E4',
                    textDisabledColor: '#2A2E32',
                  }}
                />
              </View>
              <View style={{marginTop: 30, marginBottom: 100}}>
                <TouchableOpacity
                  style={styles.screenButtonFor1}
                  onPress={itemUpload}>
                  <Text style={{fontSize: 17, color: '#E4E4E4'}}>商品上架</Text>
                </TouchableOpacity>
              </View>
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
  subTitleText: {width: 80, marginLeft: 10, fontSize: 20, color: '#E4E4E4'},
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    paddingLeft: 10,
    paddingRight: 10,
    width: 335,
    height: 45,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  textInput: {fontSize: 17, padding: 0, color: '#E4E4E4', width: 250},
  screenButtonFor1: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    marginBottom: 0,
    width: 335,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7A04EB',
  },
  modalDropList: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 10,
    marginHorizontal: 8,
    width: 150,
    height: 30,
    backgroundColor: '#202124',
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
    marginRight: 15,
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
