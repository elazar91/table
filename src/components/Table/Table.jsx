import classes from "./Table.module.css";

const Table = ({ users, deleteUser, editUser, sendUserToModal }) => {
  return (
    <div className={classes.Container}>
      <table>
        <thead>
          <tr className={classes.TrTh}>
            <th>NAME</th>
            <th>LAST NAME</th>
            <th>AGE</th>
            <th>ADDRESS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id} onClick={() => sendUserToModal(user.id)}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.address}</td>
                <td>
                  <span onClick={(e) => e.stopPropagation()}>
                    <button
                      className={classes.Edit}
                      onClick={() => editUser(user.id)}
                    >
                      edit
                    </button>
                    <button
                      className={classes.Delete}
                      onClick={() => deleteUser(user.id)}
                    >
                      delete
                    </button>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
