import './styles.css'

function TabelaRanking()
{
    return(
        <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Ranking</h2>
                <div>
                <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th>Posição</th>
              <th>Nickname</th>
              <th>Pontuação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#341</td>
              <td>Anakin</td>
              <td>9</td>
            </tr>
            <tr>
              <td>#341</td>
              <td>Anakin</td>
              <td>8</td>
            </tr>
            <tr>
              <td>#341</td>
              <td>Anakin</td>
              <td>7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default TabelaRanking