import playerInfo from "../data/player_meta";

import {useState, useEffect} from 'react'

function Table(props) {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Hint</td>
            <td>Answers</td>
          </tr>
        </thead>
        <tbody>
          {playerInfo.map((player) => (
            <tr key={player.hint} >
              <td>{player.id}</td>
              <td>{player.hint}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
