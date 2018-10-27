const groupA = [
    { name: 'Juan', age: 17 },
    { name: 'Nam', age: 5 },
    { name: 'Anna', age: 51 },
    { name: 'John', age: 32 },
    { name: 'Hoan', age: 43 },
    { name: 'Van', age: 28 }
]

function groupPeople (group) {
    if (group.length !== 0) {
        
        let group1 = []
        let group2 = []
        let group3 = []
        let group4 = []
        let group5 = []
        let result = {}
        
        group.filter(object => {
            if (object.age > 18 && object.age <= 20) {
                group1.push(object)
                return result['20 and younger'] = group1
            } else if (object.age > 20 && object.age <= 30) {
                group2.push(object)
                return result['21-30'] = group2
            } else if (object.age > 30 && object.age <= 40) {
                group3.push(object)
                return result['31-40'] = group3
            } else if (object.age > 40 && object.age <=50) {
                group4.push(object)
                return result['41-50'] = group4
            } else if (object.age > 50) {
                group5.push(object)
                return result['51 and older'] = group5
            }
        })
        return result
    }    
    return {}
}

console.log(groupPeople(groupA))