function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', borderRadius: '8px', padding: '15px', margin: '15px', boxShadow: '2px 2px 8px rgba(0,0,0,0.2)' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5em', marginBottom: '5px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span></p>
      <p style={{ fontStyle: 'italic', color: 'gray' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
