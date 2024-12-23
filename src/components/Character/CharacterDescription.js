import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Stats(props) {
    const { id, name, gender, actor, alive, colors, aliases, dob, wizard, ancestry, hogwartsStaff, hogwartsStudent, patronus, wand: { wood, core, length } } = props;

    return (
        <View style={[styles.content, { borderColor: colors.secondary }]}>
            <View style={styles.titleBlock}>
                <Text style={[styles.title, { color: colors.primary }]}>{name}</Text>
                <Text style={styles.subtitle}>{getAliases(aliases)}</Text>
            </View>
            <View key={id} style={styles.block}>
                <View key={id} style={styles.blockTitle}>
                    <Text style={[styles.propertyName, { color: colors.secondary }]}>DOB</Text>
                    <Text style={[styles.propertyName, { color: colors.secondary }]}>Gender</Text>
                    <Text style={[styles.propertyName, { color: colors.secondary }]}>Ancentry</Text>
                    <Text style={[styles.propertyName, { color: colors.secondary }]}>Wizard</Text>
                    <Text style={[styles.propertyName, { color: colors.secondary }]}>Patronus</Text>
                    <Text style={[styles.propertyName, { color: colors.secondary }]}>Wand</Text>
                    <Text style={[styles.propertyName, { color: colors.secondary }]}>Hogwarts Staff</Text>
                    <Text style={[styles.propertyName, { color: colors.secondary }]}>Student</Text>
                    <Text style={[styles.propertyName, { color: colors.secondary }]}>Actor</Text>
                    <Text style={[styles.propertyName, { color: colors.secondary }]}>Alive</Text>
                </View>
                <View style={styles.blockInfo}>
                    <Text style={[styles.propertyValue]}>{dob}</Text>
                    <Text style={[styles.propertyValue]}>{gender}</Text>
                    <Text style={[styles.propertyValue]}>{ancestry}</Text>
                    <Text style={[styles.propertyValue]}>{wizard}</Text>
                    <Text style={[styles.propertyValue]}>{patronus}</Text>
                    <Text style={[styles.propertyValue]}>{core}</Text>
                    <Text style={[styles.propertyValue]}>{hogwartsStaff}</Text>
                    <Text style={[styles.propertyValue]}>{hogwartsStudent}</Text>
                    <Text style={[styles.propertyValue]}>{actor}</Text>
                    <Text style={[styles.propertyValue]}>{alive}</Text>
                </View>
            </View>
        </View>
    )
}
const getAliases = (aliases) => {
    let aliasesListStr = ''
    aliases.map((a) => {
        aliasesListStr += ` | ${a}`
    })
    return aliasesListStr
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginTop: -30,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 140,
        backgroundColor: 'white',
        borderWidth: 5,
        borderRadius: 5,
        zIndex: -1
    },
    titleBlock: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 10,
        paddingHorizontal: 10,
    },
    subtitle: {
        fontSize: 13,
        marginTop: 0,
        padding: 5,
    },
    block: {
        flexDirection: "row",
        paddingVertical: 5,
    },
    blockTitle: {
        width: "40%",
        marginLeft: 20
    },
    propertyName: {
        textTransform: 'capitalize',
        fontSize: 16,
    },
    blockInfo: {
        width: "60%",
        flexDirection: "column",
        alignItems: "center",

    },
    propertyValue: {
        fontSize: 16,
        color: 'gray'
    },
})