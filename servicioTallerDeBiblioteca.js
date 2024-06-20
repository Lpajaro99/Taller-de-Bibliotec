async function searchBook() {
    const thead = document.getElementById('encabezado');
    thead.innerHTML = ''; // Limpiar contenido anterior del thead

    const tr = document.createElement('tr');

    const thpostId = document.createElement('th');
    thpostId.textContent = 'POST_ID';
    tr.appendChild(thpostId);

    const thid = document.createElement('th');
    thid.textContent = 'ID';
    tr.appendChild(thid);

    const thname = document.createElement('th');
    thname.textContent = 'NAME';
    tr.appendChild(thname);

    const themail = document.createElement('th');
    themail.textContent = 'EMAIL';
    tr.appendChild(themail);

    const thbody = document.createElement('th');
    thbody.textContent = 'BODY';
    tr.appendChild(thbody);

    thead.appendChild(tr);
    var idInput = document.getElementById("id-buscar");
    let id = idInput.value.trim(); // Obtener el valor del input y eliminar espacios al inicio y final
  
    if (!id) {
      console.error("Ingrese un ID válido.");
      return false; // Si el campo está vacío, salir de la función
    }
  
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
  
      if (!response.ok) {
        throw new Error(`Error de red: ${response.status}`);
      }
  
      const datos = await response.json();
  
      if (datos.length === 0) {
        console.log(`No se encontraron comentarios para el ID ${id}.`);
        return; // Si no hay datos, no realizar ninguna acción
      }
  
      cargarDatos(datos);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  function cargarDatos(datos) {
    const tbody = document.getElementById('lista');
    tbody.innerHTML = ''; // Limpiar contenido anterior del tbody
  
    datos.forEach(dato => {
      const tr = document.createElement('tr');
  
      // Crear celdas <td> para cada dato
      const tdPostId = document.createElement('td');
      tdPostId.textContent = dato.postId;
      tr.appendChild(tdPostId);
  
      const tdId = document.createElement('td');
      tdId.textContent = dato.id;
      tr.appendChild(tdId);
  
      const tdName = document.createElement('td');
      tdName.textContent = dato.name;
      tr.appendChild(tdName);
  
      const tdEmail = document.createElement('td');
      tdEmail.textContent = dato.email;
      tr.appendChild(tdEmail);
  
      const tdBody = document.createElement('td');
      tdBody.textContent = dato.body;
      tr.appendChild(tdBody);
  
      tbody.appendChild(tr); // Agregar la fila al tbody
    });
  }
  
