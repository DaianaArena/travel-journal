export default function Cards(Destinations) {
    return (


    <div class="card mb-3 m-4 border border-white" >
        <div class="row g-0">
            <div class="col-sm-4">
            <img src={Destinations.imageUrl} class="img-fluid  rounded" alt="Destination" />
            </div>

            <div class="col-sm-8">

            <div class="card-body text-start">

                <div>
                <i class="bi bi-geo-alt-fill text-danger"></i>
                <span>{Destinations.location}</span>
                <a href={Destinations.googleMapsUrl} target="_blank" class="text-muted m-0 p-1">View on Google Maps</a>
                </div>
                <h5 class="card-title">{Destinations.title}</h5>
                <p class="card-text">
                    {Destinations.startDate}<span> - </span>{Destinations.endDate}
                </p>
                <p class="card-text">{Destinations.description}</p>

                </div>
            </div>
        </div>
    </div>

    );
  }

