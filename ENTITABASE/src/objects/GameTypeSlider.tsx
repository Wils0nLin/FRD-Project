import * as React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';

export default function GameTypeSlider() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.gameTypeButton}>
        <FontAwesome5 name={'theater-masks'} size={20} color={'#E4E4E4'} />
        <Text style={styles.gameTypeText}>角色扮演</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gameTypeButton}>
        <FontAwesome5 name={'running'} size={20} color={'#E4E4E4'} />
        <Text style={styles.gameTypeText}>動作冒險</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gameTypeButton}>
        <FontAwesome5 name={'crosshairs'} size={20} color={'#E4E4E4'} />
        <Text style={styles.gameTypeText}>射擊</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gameTypeButton}>
        <FontAwesome5 name={'trophy'} size={20} color={'#E4E4E4'} />
        <Text style={styles.gameTypeText}>競技</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gameTypeButton}>
        <FontAwesome5 name={'video'} size={20} color={'#E4E4E4'} />
        <Text style={styles.gameTypeText}>劇情</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gameTypeButton}>
        <FontAwesome5 name={'users'} size={20} color={'#E4E4E4'} />
        <Text style={styles.gameTypeText}>合作</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gameTypeButton}>
        <FontAwesome5 name={'basketball-ball'} size={20} color={'#E4E4E4'} />
        <Text style={styles.gameTypeText}>體育</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gameTypeButton}>
        <FontAwesome5 name={'chess'} size={20} color={'#E4E4E4'} />
        <Text style={styles.gameTypeText}>策略</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gameTypeButton}>
        <MaterialCom name={'boxing-glove'} size={20} color={'#E4E4E4'} />
        <Text style={styles.gameTypeText}>格鬥</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gameTypeButton}>
        <FontAwesome5 name={'music'} size={20} color={'#E4E4E4'} />
        <Text style={styles.gameTypeText}>音樂</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gameTypeButton}>
        <FontAwesome5 name={'question'} size={20} color={'#E4E4E4'} />
        <Text style={styles.gameTypeText}>解謎</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gameTypeButton}>
        <MaterialCom
          name={'cards-playing-outline'}
          size={20}
          color={'#E4E4E4'}
        />
        <Text style={styles.gameTypeText}>卡牌</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gameTypeButton}>
        <MaterialCom name={'party-popper'} size={20} color={'#E4E4E4'} />
        <Text style={styles.gameTypeText}>家庭</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gameTypeButton}>
        <FontAwesome5 name={'hand-holding-heart'} size={20} color={'#E4E4E4'} />
        <Text style={styles.gameTypeText}>育成</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gameTypeButton}>
        <MaterialCom name={'axe-battle'} size={20} color={'#E4E4E4'} />
        <Text style={styles.gameTypeText}>生存</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gameTypeButton}>
        <FontAwesome5 name={'paint-roller'} size={20} color={'#E4E4E4'} />
        <Text style={styles.gameTypeText}>工藝</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gameTypeButton}>
        <FontAwesome5 name={'skull-crossbones'} size={20} color={'#E4E4E4'} />
        <Text style={styles.gameTypeText}>恐怖</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gameTypeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    marginHorizontal: 8.5,
    width: 55,
    height: 55,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  gameTypeText: {
    marginTop: 2,
    fontSize: 10,
    color: '#E4E4E4',
  },
});
