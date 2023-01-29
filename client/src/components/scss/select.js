export const customStyles = {
        control: (base, state) => ({
          ...base,
          border: 'none',
          borderBottom: '1px solid #ccc',
          borderRadius: '0',
          padding: '10px',
          marginBottom: '30px',
          boxShadow: state.isFocused ? 0 : 0,
          "&:hover": {
            border: 'none',
            borderBottom: '1px solid #ccc',
            borderRadius: '0',
            padding: '10px',
            marginBottom: '30px',
            boxShadow: state.isFocused ? 0 : 0
          }
        }),
        option: (provided, state) => ({
          ...provided,
          color: state.isSelected ? 'white' : 'black',
          backgroundColor: state.isSelected ? '#CD192F' : 'white',
          padding: '10px',
          "&:hover": {
            color: 'white',
            backgroundColor: '#CD192F',
            padding: '10px'
          }
        }),
        menu: (provided, state) => ({
          ...provided,
          color: 'black',
          backgroundColor: 'white',
          padding: '10px',
          "&:hover": {
            color: 'black',
            backgroundColor: 'white',
            padding: '10px'
          }
        })
      };
