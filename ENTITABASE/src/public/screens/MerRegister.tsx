/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  IndexPath,
  Input,
  Layout,
  Select,
  SelectItem,
  Text,
} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import {ScrollView} from 'react-native';
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

const MerRegister = () => {
  const [Name, setName] = React.useState('');
  const [Username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [ConfrimePass, setConfrimPass] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Phone, setPhone] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [selectedImageICON, setSelectedImageICON] =
    useState<ImagePickerResponse | null>(null);
  const [selectedImageREGIS, setSelectedImageREGIS] =
    useState<ImagePickerResponse | null>(null);
  const [openingHour, setHour] = useState<string>();

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

  const getAreaList = async () => {
    const area = await fetch('http://10.0.2.2:3000/public/register/selectArea');
    const arealist = await area.json();
    setAreaList(arealist);
  };
  const getDistricList = async () => {
    const district = await fetch(
      'http://10.0.2.2:3000/public/register/selectDistrict',
    );
    const districtList = await district.json();
    setDristList(districtList);
  };
  const getBankList = async () => {
    const branch = await fetch('http://10.0.2.2:3000/public/register/bank');
    const bankList = await branch.json();
    setBankList(bankList);
    console.log(bankList);
  };
  const getBranchList = async () => {
    const Branch = await fetch('http://10.0.2.2:3000/public/register/branch');
    const BranchLists = await Branch.json();
    setbranchList(BranchLists);
    console.log(branchList);
  };
  const renderIcon = (): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Entypo name="eye-with-line" size={30} color={'rgb(240,240,240)'} />
    </TouchableWithoutFeedback>
  );
  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!setSecureTextEntry);
  };
  const areaSelect = (index: any) => {
    const id = index.row + 1;
    setArea(id);
    console.log('a', id);
    getCurrentDistrict(id);
  };
  const districtSelect = (index: any) => {
    const id = districtLists[index].id;
    setDistrict(id);
    console.log('d_id', id);
  };
  const bankSelect = (index: any) => {
    const id = bankList[index].id - 1;
    setBank(id);
    getCurrentBranch(id);
    console.log('b', id);
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
    console.log('Regis', selectedImageICON);
    const formData = new FormData();
    if (selectedImageICON == null || selectedImageREGIS == null) {
      return;
    } else {
      formData.append('Img', [
        {
          name: 'IconImg',
          uri: selectedImageICON.assets![0].uri,
          type: 'image/jpeg',
          names: newFileNameIcon,
        },
        {
          name: 'RegisImg',
          uri: selectedImageREGIS.assets![0].uri,
          type: 'image/jpeg',
          names: newFileNameRegis,
        },
      ]);
    }
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
    console.log('formData', formData);

    try {
      // const uploadResponse =
      await fetch('http://10.0.2.2:3000/public/register/merRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });
      Alert.alert('Upload successful', 'Image uploaded successfully');
    } catch (error) {
      console.log('Upload failed:', error);
      Alert.alert('Upload failed', 'Image upload failed');
    }
  };
  let getCurrentDistrict = (id: string) => {
    console.log(id);
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
    console.log(id);
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
    <ScrollView style={{backgroundColor: 'rgb(40,40,40)'}}>
      <Layout style={styles.layout}>
        <Layout style={styles.items}>
          <Text style={styles.text}>姓名：</Text>
          <Input
            value={Name}
            placeholder="Place your password"
            onChangeText={nextValue => setName(nextValue)}
            style={{backgroundColor: 'rgb(40,40,40)'}}
          />
        </Layout>
        <Layout style={styles.items}>
          <Text style={styles.text}>帳號名稱：</Text>
          <Input
            value={Username}
            placeholder="Place your username"
            onChangeText={nextValue => setUsername(nextValue)}
            style={{backgroundColor: 'rgb(40,40,40)'}}
          />
        </Layout>
        <Layout style={styles.items}>
          <Text style={styles.text}>密碼：</Text>
          <Input
            value={Password}
            placeholder="Place your password"
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setPassword(nextValue)}
            style={{backgroundColor: 'rgb(40,40,40)'}}
          />
        </Layout>
        <Layout style={styles.items}>
          <Text style={styles.text}>重新輸入密碼：</Text>
          <Input
            value={ConfrimePass}
            placeholder="Place your password"
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setConfrimPass(nextValue)}
            style={{backgroundColor: 'rgb(40,40,40)'}}
          />
        </Layout>
        <Layout style={styles.items}>
          <Text style={styles.text}>電郵：</Text>
          <Input
            value={Email}
            placeholder="Place your password"
            onChangeText={nextValue => setEmail(nextValue)}
            style={{backgroundColor: 'rgb(40,40,40)'}}
          />
        </Layout>
        <Layout style={styles.items}>
          <Text style={styles.text}>電話：</Text>
          <Input
            value={Phone}
            placeholder="Place your password"
            onChangeText={nextValue => setPhone(nextValue)}
            style={{backgroundColor: 'rgb(40,40,40)'}}
          />
          <Layout style={{backgroundColor: 'rgb(40,40,40)', width: '100%'}}>
            <Text style={styles.text}>地區：</Text>
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
          </Layout>
          <Layout style={{backgroundColor: 'rgb(40,40,40)', width: '100%'}}>
            <Text style={styles.text}>分區：</Text>
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
          </Layout>
          <Layout style={{backgroundColor: 'rgb(40,40,40)', width: '100%'}}>
            <Text style={styles.text}>銀行編號：</Text>
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
          </Layout>
          <Layout style={{backgroundColor: 'rgb(40,40,40)', width: '100%'}}>
            <Text style={styles.text}>分行編號：</Text>
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
          </Layout>

          <Layout style={{backgroundColor: 'rgb(40,40,40)', width: '100%'}}>
            <Text style={styles.text}>銀行卡號碼：</Text>
            <Input
              value={accountNum}
              placeholder="Place your card code"
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
              onChangeText={nextValue => setAccountNum(nextValue)}
              style={{backgroundColor: 'rgb(40,40,40)'}}
            />
          </Layout>

          <Layout style={{backgroundColor: 'rgb(40,40,40)'}}>
            <Text style={styles.text}>營業時間：</Text>
            <Input
              editable
              multiline
              numberOfLines={7}
              value={openingHour}
              placeholder="Place your Text"
              onChangeText={nextValue => setHour(nextValue)}
              style={{backgroundColor: 'rgb(40,40,40)', width: '100%'}}
            />
          </Layout>
          <Layout style={{backgroundColor: 'rgb(40,40,40)'}}></Layout>
          <Layout style={{backgroundColor: 'rgb(40,40,40)'}}></Layout>
          <Layout
            style={{backgroundColor: 'rgb(40,40,40)', alignSelf: 'center'}}>
            <Button style={styles.button} onPress={handleImageSelectionICON}>
              選擇商標
            </Button>
            <Button style={styles.button} onPress={handleImageSelectionREGIS}>
              選擇商業登記證
            </Button>
          </Layout>
        </Layout>
        <Layout style={styles.row}>
          <Button style={styles.button} onPress={() => upload()}>
            提交
          </Button>
        </Layout>
      </Layout>
    </ScrollView>
  );
};
export default MerRegister;
const styles = StyleSheet.create({
  layout: {
    alignSelf: 'center',
    marginVertical: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(40,40,40)',
    borderColor: 'rgb(121,35,231)',
    borderWidth: 5,
    width: '90%',
    padding: 10,
    paddingBottom: 30,
    borderRadius: 15,
  },
  items: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(40,40,40)',
    width: '80%',
    marginVertical: 10,
  },
  text: {
    color: '#e4e4e4',
    fontSize: 25,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'rgb(40,40,40)',
  },
  button: {
    marginTop: 30,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(30,30,30)',
    borderColor: 'rgb(121,35,231)',
  },
});
