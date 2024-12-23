import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Stats(props) {
    const { stats } = props;
    const barStyles = (num) => {
        const color = num > 49?"#00ac17":"#ff3e3e"
        return {
            backgroundColor: color,
            width: `${num}%`
        }
    }
    return (
        <View style={styles.content}>
            <Text style={styles.title}>Stats</Text>
            {
                stats.map((item, index) => (
                    <View key={index} style={styles.block}>
                        <View key={index} style={styles.blockTitle}>
                            <Text style={styles.statName}>{item.stat.name}</Text>
                        </View>
                        <View style={styles.blockInfo}>
                            <Text style={styles.number}>{item.base_stat}</Text>
                            <View style={styles.bgBar}>
                                <View style={[styles.bar, barStyles(item.base_stat)]}>
                                </View>
                            </View>
                        </View>

                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 5,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5,
    },
    block: {
        flexDirection: "row",
        paddingVertical: 5,
    },
    blockTitle: {
        width: "30%",
    },
    statName: {
        textTransform: 'capitalize',
        fontSize: 12,
        color: "#6b6b6b"
    },
    blockInfo: {
        width: "70%",
        flexDirection: "row",
        alignItems: "center"
    },
    number: {
        size: 12,
        width: "12%"
    },
    bgBar: {
        backgroundColor: "#dedede",
        width: "88%",
        borderRadius: 20,
        height: 5,
        overflow: "hidden",
    },
    
    bar: {
        borderRadius: 20,
        height: 5,
    }, 
})