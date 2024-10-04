using System;
using System.Collections.Generic;

namespace Proyecto_ASP.NET_CORE_Reactjs.Models;

public partial class Persona
{
    public int Id { get; set; }

    public string? Nombre { get; set; }

    public string? Correo { get; set; }

    public string? Direccion { get; set; }

    public string? Telefono { get; set; }
}
