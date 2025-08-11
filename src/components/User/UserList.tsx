export default function UserList({ users }: {users: any}) {
    return (
      <ul>
        {users.map((u: any) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    );
  }