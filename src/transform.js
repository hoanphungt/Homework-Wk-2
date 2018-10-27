module.exports.groupAdultsByAgeRange = function (group) {
    if (group.length !== 0) {        
        const group1 = []
        const group2 = []
        const group3 = []
        const group4 = []
        const group5 = []

        const finalGroups = {}
        
        group.filter(object => {
            if (object.age >= 18 && object.age <= 20) {
                group1.push(object)
                return finalGroups['20 and younger'] = group1
            } else if (object.age > 20 && object.age <= 30) {
                group2.push(object)
                return finalGroups['21-30'] = group2
            } else if (object.age > 30 && object.age <= 40) {
                group3.push(object)
                return finalGroups['31-40'] = group3
            } else if (object.age > 40 && object.age <=50) {
                group4.push(object)
                return finalGroups['41-50'] = group4
            } else if (object.age > 50) {
                group5.push(object)
                return finalGroups['51 and older'] = group5
            }
        })
        return finalGroups
    }    
    return {}
}
