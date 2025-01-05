import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Constants';
import { useState } from 'react';


export default function PomodoroMode({timerMode, sessionCount, numberOfSessions}) {

  return (
    <View style={styles.roundedContainer}>
      <View style={styles.content}>
          {/* Contenu à gauche */}
          <View style={styles.leftContent}>
          <Text style={{fontSize : 30, color : Colors.GREEN, fontWeight : '700'}}>{timerMode}</Text>
          </View>

          {/* Ligne verticale */}
          <View style={styles.separator} />

          {/* Contenu à droite */}
          <View style={styles.rightContent}>
          <Text style={{fontSize : 30, color : Colors.GREEN, fontWeight : '700'}}>{sessionCount} / {numberOfSessions}</Text>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    roundedContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.BEIGE, // Couleur du conteneur
        borderTopLeftRadius: 30, // Angle arrondi en haut à gauche
        borderTopRightRadius: 30, // Angle arrondi en haut à droite
        height : 150,
        alignItems: 'center', // Centrer le contenu horizontalement
      },
      content: {
        flex : 1,
        flexDirection: 'row', // Place les éléments en ligne horizontale
        alignItems: 'center', // Aligne verticalement au centre
        justifyContent: 'space-between', // Espacement entre les contenus
      },
      leftContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      separator: {
        width: 1, // Largeur de la ligne
        height: '70%', // Hauteur complète du conteneur
        marginHorizontal: 10, // Espacement autour de la ligne
        backgroundColor : Colors.GREEN,
        width : 3,
        borderRadius : 30,
      },
      rightContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
})