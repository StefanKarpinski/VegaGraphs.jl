var documenterSearchIndex = {"docs":
[{"location":"int_functions/#VegaGraphs.jl-Internal-Functions","page":"Internal Functions","title":"VegaGraphs.jl - Internal Functions","text":"","category":"section"},{"location":"int_functions/","page":"Internal Functions","title":"Internal Functions","text":"This section constains the documentation concerning the internal functions used in the package. These functions are not available to the user, but might be of interest for people interested in developing new functionality to the package.","category":"page"},{"location":"int_functions/#Plotting-Function","page":"Internal Functions","title":"Plotting Function","text":"","category":"section"},{"location":"int_functions/","page":"Internal Functions","title":"Internal Functions","text":"These functions contain the Vega-Lite specifications for the plots.","category":"page"},{"location":"int_functions/","page":"Internal Functions","title":"Internal Functions","text":"VegaGraphs.vl_graph_plot","category":"page"},{"location":"int_functions/#VegaGraphs.vl_graph_plot","page":"Internal Functions","title":"VegaGraphs.vl_graph_plot","text":"vlgraphplot(     dfnodes,     dfedges,     nodelabel       = true,     nodelabelsize   = 10,     tooltip          = true,     nodesize        = 500,     nodecolor       = \"#9ecae9\",     nodesizefield   = nothing,     nodecolorfield  = nothing,     nodecolorscheme = \"blues\",     nodeopacity     = 1.0,     edge_opacity     = 0.5,     width            = 600,     height           = 400     ) Contains the VegaLite specification for producing the plot.\n\n\n\n\n\n","category":"function"},{"location":"int_functions/#Graph-Function","page":"Internal Functions","title":"Graph Function","text":"","category":"section"},{"location":"int_functions/","page":"Internal Functions","title":"Internal Functions","text":"These functions help create the DataFrames that are passed on to the Vega-Lite specifications.","category":"page"},{"location":"int_functions/","page":"Internal Functions","title":"Internal Functions","text":"VegaGraphs.get_edges","category":"page"},{"location":"int_functions/#VegaGraphs.get_edges","page":"Internal Functions","title":"VegaGraphs.get_edges","text":"getedges(g,nodex,nodey) g is a SimpleWeightedGraph, while nodex and node_y are arrays containing the position of the nodes.\n\nReturn a DataFrame containing the edge information, such as position, pairs and weights.\n\n\n\n\n\n","category":"function"},{"location":"#VegaGraphs.jl","page":"Home","title":"VegaGraphs.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Create beatiful and interactive visualizations for graphs using Vega-Lite.","category":"page"},{"location":"","page":"Home","title":"Home","text":"VegaGraphs implements graph visualization with Vega-Lite.","category":"page"},{"location":"","page":"Home","title":"Home","text":"This library is built on top of the JuliaGraphs project. The current version supports only undirected graphs.","category":"page"},{"location":"#Package-Features","page":"Home","title":"Package Features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Interactive graph visualization;\nAll layouts provided by GraphPlots;\nHighly customizable visualization;","category":"page"},{"location":"#Undirected-Graph-Visualization","page":"Home","title":"Undirected Graph Visualization","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"graphplot","category":"page"},{"location":"#VegaGraphs.graphplot","page":"Home","title":"VegaGraphs.graphplot","text":"graphplot(df, layout = GraphPlot.spring_layout; kwargs...)\n\nInput:\n\ng is SimpleGraph of SimpleWeightedGraph.\nlayout is a GraphPlot layout function (e.g GraphPlot.circular_layout)\n\nThis function produces an standard graph plot. The possible arguments to be used are the following:\n\nnode_label       = true\nnode_labelsize   = 10\ntooltip          = true\nnode_size        = 500\nnode_color       = \"#9ecae9\"\nnode_sizefield   = nothing\nnode_colorfield  = nothing\nnode_colorscheme = \"blues\"\nnode_opacity     = 1.0\nedge_opacity     = 0.5\nwidth            = 600\nheight           = 400\n\n\n\n\n\n","category":"function"}]
}
