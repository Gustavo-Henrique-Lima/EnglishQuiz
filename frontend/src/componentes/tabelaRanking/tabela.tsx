import './styles.css'

function TabelaRanking()
{
    return(
        <div className="englishquiz-card">
                <h2 className="englishquiz-ranking-title">Ranking</h2>
                <div>
                <table className="englishquiz-ranking-table">
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