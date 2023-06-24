/* eslint-disable react-native/no-inline-styles */
import {Layout, Select, SelectItem, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';
import PublicForehead from '../../objects/PublicForeheadView';

import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';

interface district {
  id: any;
  area_id: any;
  district: any;
}
interface Area {
  id: any;
  area: any;
}

const MerRegister = ({navigation}: any) => {
  const [Name, setName] = React.useState('');
  const [Username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [ConfirmPass, setConfirmPass] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Phone, setPhone] = React.useState('');
  const [selectedImageICON, setSelectedImageICON] =
    useState<ImagePickerResponse | null>(null);
  const [selectedImageREGIS, setSelectedImageREGIS] =
    useState<ImagePickerResponse | null>(null);
  const [openingHour, setHour] = useState<string>();
  const [secure, setSecure] = useState(true);
  const [secureAgain, setSecureAgain] = useState(true);
  const [bankList, setBankList] = useState<Array<any>>([]);
  const [branchList, setbranchList] = useState<Array<any>>([]);
  const [branchLists, setbranchLists] = useState<Array<any>>([]);

  const [AreaList, setAreaList] = useState<Array<Area>>([]);

  const [districtList, setDristList] = useState<Array<district>>([]);
  const [districtLists, setDristLists] = useState<Array<district>>([]);
  const [district, setDistrict] = useState('');
  const [Area, setArea] = useState(0);
  const [bank, setBank] = useState(0);
  const [branch, setBranch] = useState(0);
  const [accountNum, setAccountNum] = useState('');
  const [address, setAddress] = useState('');

  const getAreaList = async () => {
    const area = await fetch(
      'http://192.168.160.142:3000/public/register/selectArea',
    );
    const arealist = await area.json();
    setAreaList(arealist);
  };
  const getDistricList = async () => {
    const district = await fetch(
      'http://192.168.160.142:3000/public/register/selectDistrict',
    );
    const districtList = await district.json();
    setDristList(districtList);
  };
  const getBankList = async () => {
    const branch = await fetch(
      'http://192.168.160.142:3000/public/register/bank',
    );
    const bankList = await branch.json();
    setBankList(bankList);
  };
  const getBranchList = async () => {
    const Branch = await fetch(
      'http://192.168.160.142:3000/public/register/branch',
    );
    const BranchLists = await Branch.json();
    setbranchList(BranchLists);
  };
  const areaSelect = (index: any) => {
    const id = index.row + 1;
    setArea(id);

    getCurrentDistrict(id);
  };
  const districtSelect = (index: any) => {
    const id = districtLists[index].id;
    setDistrict(id);
  };
  const bankSelect = (index: any) => {
    const id = bankList[index].id - 1;
    setBank(id);
    getCurrentBranch(id);
  };
  const branchSelect = (index: any) => {
    const id = branchList[index].id;
    setBranch(id);
  };

  const handleImageSelectionICON = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxHeight: 100,
        maxWidth: 100,
      },
      response => {
        if (response.didCancel) {
          console.log('用户取消了选择');
        } else if (response.errorMessage) {
          console.log('选择图片时出现错误:', response.errorMessage);
        } else {
          // 图片选择成功
          setSelectedImageICON(response);
          console.log('handle selected data check', selectedImageICON);
        }
      },
    );
  };
  const handleImageSelectionREGIS = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxHeight: 100,
        maxWidth: 100,
      },
      response => {
        if (response.didCancel) {
          console.log('用户取消了选择');
        } else if (response.errorMessage) {
          console.log('选择图片时出现错误:', response.errorMessage);
        } else {
          // 图片选择成功
          setSelectedImageREGIS(response);
          console.log('handle selected data check', selectedImageREGIS);
        }
      },
    );
  };
  const upload = async () => {
    // const folderName = '../../utils/merUpload/';
    const newFileNameIcon = `Icon${Date.now()}.jpg`; // 替换为新的文件名
    const newFileNameRegis = `Regis${Date.now()}.jpg`;
    const formData = new FormData();
    if (selectedImageICON == null || selectedImageREGIS == null) {
      return;
    } else {
      formData.append('RegisImg', {
        name: 'RegisImg',
        uri: selectedImageREGIS.assets![0].uri,
        type: 'image/jpeg',
        names: newFileNameRegis,
      });
    }
    formData.append('IconImg', {
      name: 'IconImg',
      uri: selectedImageICON.assets![0].uri,
      type: 'image/jpeg',
      names: newFileNameIcon,
    });
    formData.append('address', address);
    formData.append('name', Name);
    formData.append('username', Username);
    formData.append('password', Password);
    formData.append('email', Email);
    formData.append('phone', Phone);
    formData.append('area', Area);
    formData.append('district', district);
    formData.append('bank', bank);
    formData.append('branch', branch);
    formData.append('Hour', openingHour);
    formData.append('accNum', accountNum);

    try {
      // const uploadResponse =
      await fetch('http://192.168.160.142:3000/public/register/merRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });
      Alert.alert('註冊成功', '立即登入體驗ENTITÀBASE的營銷世界吧');
      navigation.navigate('LogIn');
    } catch (error) {
      console.log('Upload failed:', error);
      Alert.alert('Upload failed', 'Image upload failed');
    }
  };
  let getCurrentDistrict = (id: string) => {
    let clonedDistriclist = districtList.slice();
    let districlistpush: Array<district> = [];

    clonedDistriclist.map(items => {
      if (items.area_id == id) {
        console.log(items.area_id);
        districlistpush.push(items);
      } else {
        console.log('delete');
      }
    });
    console.log('filtered', districlistpush);
    setDristLists(districlistpush);
  };
  let getCurrentBranch = (id: number) => {
    let clonedBranch = branchList.slice();
    let branchpush: Array<district> = [];

    clonedBranch.map(items => {
      if (items.bank_id == id) {
        console.log(items.bank_id);
        branchpush.push(items);
      } else {
        console.log('delete');
      }
    });
    console.log('filtered', branchpush);
    setbranchLists(branchpush);
    console.log(branchLists);
  };
  useEffect(() => {
    getAreaList();
    getDistricList();
    getBankList();
    getBranchList();
  }, [Area, bank]);
  return (
    <ScrollView style={{backgroundColor: '#2A2E32'}}>
      <SafeAreaView style={styles.safeArea}>
        <PublicForehead />
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20, color: '#E4E4E4'}}>商戶註冊</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={{justifyContent: 'center', width: 350}}>
          <View>
            <View style={styles.subTitle}>
              <MaterialCom
                name={'flag-variant-outline'}
                size={20}
                color={'#E4E4E4'}
              />
              <Text style={styles.subTitleText}>商戶標誌</Text>
            </View>
            <View>
              <View style={styles.inputImageBox}>
                <TouchableOpacity
                  style={styles.imageUploadBox}
                  onPress={handleImageSelectionICON}>
                  <MaterialCom
                    name={'file-image-plus'}
                    size={50}
                    color={'#E4E4E4'}
                  />
                  <Text style={{marginTop: 5, fontSize: 15}}>
                    請點擊上載圖片
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.subTitle}>
              <FontAwesome5 name={'signature'} size={15} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>商戶名稱</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={nextValue => setName(nextValue)}
                  value={Name}
                  placeholder="商戶名稱"
                />
              </View>
            </View>
          </View>

          <View>
            <View style={styles.subTitle}>
              <FontAwesome5 name={'user-lock'} size={15} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>帳戶號碼</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={nextValue => setUsername(nextValue)}
                  value={Username}
                  placeholder="請輸入帳戶號碼"
                />
              </View>
            </View>
          </View>

          <View>
            <View style={styles.subTitle}>
              <FontAwesome5 name={'key'} size={15} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>密碼</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={nextValue => setPassword(nextValue)}
                    value={Password}
                    placeholder="請輸入密碼"
                    secureTextEntry={secure}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setSecure(!secure)}
                  style={{width: 35, alignItems: 'center'}}>
                  <FontAwesome5
                    name={secure ? 'eye' : 'eye-slash'}
                    size={25}
                    color={'#E4E4E4'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.subTitle}>
              <FontAwesome5 name={'key'} size={15} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>再次輸入密碼</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={nextValue => setConfirmPass(nextValue)}
                    value={ConfirmPass}
                    placeholder="請再次輸入密碼"
                    secureTextEntry={secureAgain}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setSecureAgain(!secureAgain)}
                  style={{width: 35, alignItems: 'center'}}>
                  <FontAwesome5
                    name={secureAgain ? 'eye' : 'eye-slash'}
                    size={25}
                    color={'#E4E4E4'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.subTitle}>
              <FontAwesome5 name={'phone-alt'} size={15} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>電話號碼</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={nextValue => setPhone(nextValue)}
                  value={Phone}
                  placeholder="請輸入電話號碼"
                  keyboardType={'numeric'}
                />
              </View>
            </View>
          </View>

          <View>
            <View style={styles.subTitle}>
              <MaterialCom name={'email-outline'} size={20} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>電郵地址</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={nextValue => setEmail(nextValue)}
                  value={Email}
                  placeholder="請輸入電郵地址"
                />
              </View>
            </View>
          </View>

          <Layout style={{backgroundColor: '#2A2E32'}}>
            <View style={styles.subTitle}>
              <FontAwesome5
                name={'map-marker-alt'}
                size={15}
                color={'#E4E4E4'}
              />
              <Text style={styles.subTitleText}>商店地址</Text>
            </View>
            <Select
              style={{width: '100%'}}
              placeholder={'地區'}
              onSelect={(index): any => {
                areaSelect(index);
              }}>
              {AreaList.map(items => (
                <SelectItem title={items.area} />
              ))}
            </Select>
            <Select
              style={{width: '100%'}}
              placeholder={'分區'}
              onSelect={(index): any => {
                districtSelect(index);
              }}>
              {districtLists.map(items => (
                <SelectItem title={items.district} />
              ))}
            </Select>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInput}
                onChangeText={nextValue => setAddress(nextValue)}
                value={address}
                placeholder="請輸入商店地址"
              />
            </View>
          </Layout>

          <Layout style={{backgroundColor: '#2A2E32'}}>
            <View style={styles.subTitle}>
              <MaterialCom name={'bank'} size={15} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>銀行帳號</Text>
            </View>
            <Select
              style={{width: '100%'}}
              placeholder={'銀行編號'}
              onSelect={(index): any => {
                bankSelect(index);
              }}>
              {bankList.map(items => (
                <SelectItem title={items.bank_code + '\n' + items.bank_name} />
              ))}
            </Select>
            <Select
              style={{width: '100%'}}
              placeholder={'分行編號'}
              onSelect={(index): any => {
                branchSelect(index);
              }}>
              {branchLists.map(items => (
                <SelectItem
                  title={items.branch_code + '\n' + items.branch_name}
                />
              ))}
            </Select>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInput}
                onChangeText={nextValue => setAccountNum(nextValue)}
                value={accountNum}
                placeholder="請輸入銀行帳號"
                keyboardType={'numeric'}
              />
            </View>
          </Layout>

          <View>
            <View style={styles.subTitle}>
              <MaterialCom name={'email-outline'} size={20} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>營業時間</Text>
            </View>
            <View>
              <View style={styles.inputBigBox}>
                <TextInput
                  style={styles.textBigInput}
                  onChangeText={nextValue => setHour(nextValue)}
                  value={openingHour}
                  placeholder="請輸入營業時間"
                />
              </View>
            </View>
          </View>

          <View>
            <View style={styles.subTitle}>
              <FontAwesome5 name={'photo-video'} size={15} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>商業登記證</Text>
            </View>
            <View>
              <View style={styles.inputImageBox}>
                <TouchableOpacity
                  style={styles.imageUploadBox}
                  onPress={handleImageSelectionREGIS}>
                  <MaterialCom
                    name={'file-image-plus'}
                    size={50}
                    color={'#E4E4E4'}
                  />
                  <Text style={{marginTop: 5, fontSize: 15}}>
                    請點擊上載圖片
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{alignItems: 'center', width: 350}}>
            <TouchableOpacity
              style={styles.screenButtonFor1}
              onPress={() => upload()}>
              <Text style={{fontSize: 17, color: '#E4E4E4'}}>註冊</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default MerRegister;
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
  // dataBox: {justifyContent: 'center', width: 350, backgroundColor: '#2A2E32'},
  subTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    marginBottom: 0,
    marginTop: 10,
    paddingLeft: 10,
    width: 350,
  },
  subTitleText: {marginLeft: 10, fontSize: 17, color: '#E4E4E4'},
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
  screenButtonFor1: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    marginTop: 20,
    marginBottom: 100,
    width: 335,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7A04EB',
  },
  textInput: {fontSize: 17, padding: 0, color: '#E4E4E4', width: 250},
  textBigInput: {
    fontSize: 17,
    padding: 0,
    color: '#E4E4E4',
    width: 250,
    height: 130,
  },
  imageUploadBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 120,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#7A04EB',
  },
  inputImageBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  inputBigBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
});
