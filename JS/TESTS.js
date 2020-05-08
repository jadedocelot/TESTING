var oregonFriends = { // OG List

	friendOne: 'Traci',
	friendTwo: 'Kevin',
	friendThree: 'Allison',
	friendFour: 'Meg',
	friendFive: 'Tommy'
};

delete oregonFriends.friendFive; //friendFive property will be deleted from oregonFriend object

console.log(oregonFriends)
//dev console output: Object { friendOne: "Traci", friendTwo: "Kevin", friendThree: "Allison", friendFour: "Meg", friendFive: "Tommy" }
