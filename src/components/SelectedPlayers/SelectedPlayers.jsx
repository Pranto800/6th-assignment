import React from 'react'
import { FaUser } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
export const SelectedPlayers = ({selectedPlayers , setSelectedPlayers }) => {
    
     const handleDeleteSelectedPlayer = (player) => {
    console.log(selectedPlayers, "selectedPlayers");
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName !== player.playerName,
    );
    console.log(filteredPlayers, "filteredPlayers");
    setSelectedPlayers(filteredPlayers)
    
  };

  return  (
   
    <div>
      <div className="space-y-5">
        {selectedPlayers.map((player, ind) => {
          return (
            <div
              key={ind}
              className="flex items-center gap-6 justify-between p-5 rounded-2xl border"
            >
              <div className="flex items-center gap-6">
                <img
                  src={player.playerImg}
                  alt={player.playerName}
                  className="h-[75px] w-auto rounded-md"
                />

                <div>
                  <h2 className="flex items-center gap-2 font-semibold text-xl">
                    <FaUser /> {player.playerName}
                  </h2>

                  <p>{player.playerType}</p>
                </div>
              </div>

              <button
                className="btn text-red-500"
                onClick={() => handleDeleteSelectedPlayer(player)}
              >
                <MdDelete />
              </button>
            </div>
          );
        })}
      </div>
    </div>
    
  )
};

