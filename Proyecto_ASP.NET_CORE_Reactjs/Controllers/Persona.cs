using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Proyecto_ASP.NET_CORE_Reactjs;
using Proyecto_ASP.NET_CORE_Reactjs.Models;

namespace Proyecto_ASP.NET_CORE_Reactjs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
        private readonly PersonaContext _personaContext;

        public PersonaController(PersonaContext context)
        {
            _personaContext = context;
        }

        [HttpGet]
        [Route("ObtenerPersona")]
        public IActionResult ObtenerPersona()
        {
            List<Persona> lista = _personaContext.Personas.ToList();
            return StatusCode(StatusCodes.Status200OK,lista);
        }

    }
}
