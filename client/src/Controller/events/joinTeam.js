export default function useJoinTeam() {
	let handleJoinTeam = team => {
		console.log('joined team ' + team);
	};
	return { handleJoinTeam };
}
