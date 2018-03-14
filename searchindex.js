Search.setIndex({docnames:["addresses/address","addresses/addresses","addresses/equiv_address","addresses/types","chain/AnyInputRange","chain/AnyOutputRange","chain/AnyTxRange","chain/block","chain/blockchain","chain/chain","chain/input","chain/output","chain/tx","changelog","clustering/cluster","clustering/cluster_manager","clustering/clustering","clustering/tagging","heuristics/heuristics","index","readme"],envversion:53,filenames:["addresses/address.rst","addresses/addresses.rst","addresses/equiv_address.rst","addresses/types.rst","chain/AnyInputRange.rst","chain/AnyOutputRange.rst","chain/AnyTxRange.rst","chain/block.rst","chain/blockchain.rst","chain/chain.rst","chain/input.rst","chain/output.rst","chain/tx.rst","changelog.rst","clustering/cluster.rst","clustering/cluster_manager.rst","clustering/clustering.rst","clustering/tagging.rst","heuristics/heuristics.rst","index.rst","readme.rst"],objects:{"blocksci.Address":{address_num:[0,1,1,""],balance:[0,2,1,""],equiv:[0,2,1,""],in_txes:[0,2,1,""],in_txes_count:[0,2,1,""],ins:[0,2,1,""],out_txes:[0,2,1,""],out_txes_count:[0,2,1,""],outs:[0,2,1,""],txes:[0,2,1,""],type:[0,1,1,""]},"blocksci.AnyInputRange":{address:[4,1,1,""],address_type:[4,1,1,""],age:[4,1,1,""],all:[4,1,1,""],block:[4,1,1,""],sent_after:[4,2,1,""],sent_before:[4,2,1,""],sent_outside:[4,2,1,""],sent_within:[4,2,1,""],sequence_num:[4,1,1,""],spent_tx:[4,1,1,""],spent_tx_index:[4,1,1,""],tx:[4,1,1,""],value:[4,1,1,""],with_type:[4,2,1,""]},"blocksci.AnyOutputRange":{address:[5,1,1,""],address_type:[5,1,1,""],all:[5,1,1,""],block:[5,1,1,""],is_spent:[5,1,1,""],spending_tx:[5,1,1,""],spending_tx_index:[5,1,1,""],spent_after:[5,2,1,""],spent_before:[5,2,1,""],spent_outside:[5,2,1,""],spent_within:[5,2,1,""],tx:[5,1,1,""],unspent:[5,1,1,""],value:[5,1,1,""],with_type:[5,2,1,""]},"blocksci.AnyTxRange":{all:[6,1,1,""],base_size:[6,1,1,""],block:[6,1,1,""],block_height:[6,1,1,""],block_time:[6,1,1,""],change_output:[6,1,1,""],fee:[6,1,1,""],fee_per_byte:[6,1,1,""],hash:[6,1,1,""],index:[6,1,1,""],input_count:[6,1,1,""],input_value:[6,1,1,""],inputs:[6,1,1,""],is_coinbase:[6,1,1,""],locktime:[6,1,1,""],op_return:[6,1,1,""],output_count:[6,1,1,""],output_value:[6,1,1,""],outputs:[6,1,1,""],size_bytes:[6,1,1,""],total_size:[6,1,1,""],virtual_size:[6,1,1,""],weight:[6,1,1,""]},"blocksci.Block":{__getitem__:[7,2,1,""],__init__:[7,1,1,""],__iter__:[7,2,1,""],__len__:[7,2,1,""],__module__:[7,1,1,""],__repr__:[7,2,1,""],base_size:[7,1,1,""],bits:[7,1,1,""],coinbase_param:[7,1,1,""],coinbase_tx:[7,1,1,""],hash:[7,1,1,""],height:[7,1,1,""],input_count:[7,1,1,""],input_value:[7,1,1,""],inputs:[7,1,1,""],miner:[7,2,1,""],net_address_type_value:[7,2,1,""],net_full_type_value:[7,2,1,""],next_block:[7,1,1,""],nonce:[7,1,1,""],output_count:[7,1,1,""],output_value:[7,1,1,""],outputs:[7,1,1,""],prev_block:[7,1,1,""],size_bytes:[7,1,1,""],time:[7,1,1,""],timestamp:[7,1,1,""],total_size:[7,1,1,""],total_spent_of_ages:[7,2,1,""],txes:[7,1,1,""],version:[7,1,1,""],virtual_size:[7,1,1,""],weight:[7,1,1,""]},"blocksci.Blockchain":{__getitem__:[8,2,1,""],__iter__:[8,2,1,""],__len__:[8,2,1,""],address_count:[8,2,1,""],address_from_index:[8,2,1,""],address_from_string:[8,2,1,""],address_type_txes:[8,2,1,""],addresses:[8,2,1,""],addresses_with_prefix:[8,2,1,""],config:[8,1,1,""],filter_blocks:[8,2,1,""],filter_txes:[8,2,1,""],heights_to_dates:[8,2,1,""],map_blocks:[8,2,1,""],mapreduce_block_ranges:[8,2,1,""],mapreduce_blocks:[8,2,1,""],mapreduce_txes:[8,2,1,""],outputs_unspent:[8,1,1,""],range:[8,2,1,""],segment:[8,2,1,""],segment_indexes:[8,2,1,""],tx_with_hash:[8,2,1,""],tx_with_index:[8,2,1,""]},"blocksci.EquivAddress":{balance:[2,2,1,""],in_txes:[2,2,1,""],in_txes_count:[2,2,1,""],ins:[2,2,1,""],out_txes:[2,2,1,""],out_txes_count:[2,2,1,""],outs:[2,2,1,""],txes:[2,2,1,""]},"blocksci.Input":{address:[10,1,1,""],address_type:[10,1,1,""],age:[10,1,1,""],block:[10,1,1,""],sequence_num:[10,1,1,""],spent_tx:[10,1,1,""],spent_tx_index:[10,1,1,""],tx:[10,1,1,""],value:[10,1,1,""]},"blocksci.MultisigAddress":{addresses:[0,1,1,""],first_tx:[0,1,1,""],has_been_spent:[0,1,1,""],required:[0,1,1,""],revealed_tx:[0,1,1,""],total:[0,1,1,""]},"blocksci.NonStandardAddress":{first_tx:[0,1,1,""],has_been_spent:[0,1,1,""],in_script:[0,1,1,""],out_script:[0,1,1,""],revealed_tx:[0,1,1,""]},"blocksci.OpReturnAddress":{data:[0,1,1,""],first_tx:[0,1,1,""],has_been_spent:[0,1,1,""],revealed_tx:[0,1,1,""]},"blocksci.Output":{address:[11,1,1,""],address_type:[11,1,1,""],block:[11,1,1,""],is_spent:[11,1,1,""],spending_tx:[11,1,1,""],spending_tx_index:[11,1,1,""],tx:[11,1,1,""],value:[11,1,1,""]},"blocksci.PayToScriptHashAddress":{address_string:[0,1,1,""],first_tx:[0,1,1,""],has_been_spent:[0,1,1,""],raw_address:[0,1,1,""],revealed_tx:[0,1,1,""],wrapped_address:[0,1,1,""]},"blocksci.PayToWitnessScriptHashAddress":{address_string:[0,1,1,""],first_tx:[0,1,1,""],has_been_spent:[0,1,1,""],raw_address:[0,1,1,""],revealed_tx:[0,1,1,""],wrapped_address:[0,1,1,""]},"blocksci.PubkeyAddress":{address_string:[0,1,1,""],find_multisigs:[0,2,1,""],first_tx:[0,1,1,""],has_been_spent:[0,1,1,""],pubkey:[0,1,1,""],pubkeyhash:[0,1,1,""],revealed_tx:[0,1,1,""]},"blocksci.PubkeyHashAddress":{address_string:[0,1,1,""],find_multisigs:[0,2,1,""],first_tx:[0,1,1,""],has_been_spent:[0,1,1,""],pubkey:[0,1,1,""],pubkeyhash:[0,1,1,""],revealed_tx:[0,1,1,""]},"blocksci.Tx":{base_size:[12,1,1,""],block:[12,1,1,""],block_height:[12,1,1,""],block_time:[12,1,1,""],change_output:[12,1,1,""],fee:[12,1,1,""],fee_per_byte:[12,1,1,""],hash:[12,1,1,""],index:[12,1,1,""],input_count:[12,1,1,""],input_value:[12,1,1,""],inputs:[12,1,1,""],ins:[12,1,1,""],is_coinbase:[12,1,1,""],locktime:[12,1,1,""],op_return:[12,1,1,""],output_count:[12,1,1,""],output_value:[12,1,1,""],outputs:[12,1,1,""],outs:[12,1,1,""],size_bytes:[12,1,1,""],total_size:[12,1,1,""],virtual_size:[12,1,1,""],weight:[12,1,1,""]},"blocksci.WitnessPubkeyHashAddress":{address_string:[0,1,1,""],find_multisigs:[0,2,1,""],first_tx:[0,1,1,""],has_been_spent:[0,1,1,""],pubkey:[0,1,1,""],pubkeyhash:[0,1,1,""],revealed_tx:[0,1,1,""]},"blocksci.address_type":{multisig:[3,1,1,""],multisig_pubkey:[3,1,1,""],nonstandard:[3,1,1,""],nulldata:[3,1,1,""],pubkey:[3,1,1,""],pubkeyhash:[3,1,1,""],scripthash:[3,1,1,""],types:[3,1,1,""],witness_pubkeyhash:[3,1,1,""],witness_scripthash:[3,1,1,""]},"blocksci.blocksci_interface":{heuristics:[18,3,0,"-"]},"blocksci.blocksci_interface.heuristics":{address_deanon_txes:[18,4,1,""],change_by_address_reuse:[18,4,1,""],change_by_address_type:[18,4,1,""],change_by_client_change_address_behavior:[18,4,1,""],change_by_locktime:[18,4,1,""],change_by_optimal_change:[18,4,1,""],change_by_peeling_chain:[18,4,1,""],change_by_power_of_ten_value:[18,4,1,""],change_over_txes:[18,4,1,""],coinjoin_txes:[18,4,1,""],is_address_deanon:[18,4,1,""],is_change_over:[18,4,1,""],is_coinjoin:[18,4,1,""],is_definite_coinjoin:[18,4,1,""],is_keyset_change:[18,4,1,""],keyset_change_txes:[18,4,1,""],possible_coinjoin_txes:[18,4,1,""],unique_change_by_address_reuse:[18,4,1,""],unique_change_by_address_type:[18,4,1,""],unique_change_by_client_change_address_behavior:[18,4,1,""],unique_change_by_locktime:[18,4,1,""],unique_change_by_optimal_change:[18,4,1,""],unique_change_by_peeling_chain:[18,4,1,""],unique_change_by_power_of_ten_value:[18,4,1,""]},"blocksci.cluster_python":{Cluster:[14,0,1,""],ClusterManager:[15,0,1,""],TaggedAddress:[17,0,1,""],TaggedCluster:[17,0,1,""]},"blocksci.cluster_python.Cluster":{addresses:[14,1,1,""],balance:[14,2,1,""],count_of_type:[14,2,1,""],in_txes:[14,2,1,""],in_txes_count:[14,2,1,""],ins:[14,2,1,""],out_txes:[14,2,1,""],out_txes_count:[14,2,1,""],outs:[14,2,1,""],tagged_addresses:[14,2,1,""],txes:[14,2,1,""]},"blocksci.cluster_python.ClusterManager":{cluster_count:[15,2,1,""],cluster_sizes:[15,2,1,""],cluster_with_address:[15,2,1,""],clusters:[15,2,1,""],tagged_clusters:[15,2,1,""]},"blocksci.cluster_python.TaggedAddress":{address:[17,1,1,""],tag:[17,1,1,""]},"blocksci.cluster_python.TaggedCluster":{cluster:[17,1,1,""],tagged_addresses:[17,1,1,""]},blocksci:{Address:[0,0,1,""],AnyInputRange:[4,0,1,""],AnyOutputRange:[5,0,1,""],AnyTxRange:[6,0,1,""],Block:[7,0,1,""],Blockchain:[8,0,1,""],EquivAddress:[2,0,1,""],Input:[10,0,1,""],MultisigAddress:[0,0,1,""],NonStandardAddress:[0,0,1,""],OpReturnAddress:[0,0,1,""],Output:[11,0,1,""],PayToScriptHashAddress:[0,0,1,""],PayToWitnessScriptHashAddress:[0,0,1,""],PubkeyAddress:[0,0,1,""],PubkeyHashAddress:[0,0,1,""],Tx:[12,0,1,""],WitnessPubkeyHashAddress:[0,0,1,""],address_type:[3,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","module","Python module"],"4":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:attribute","2":"py:method","3":"py:module","4":"py:function"},terms:{"2xlarg":20,"7cf38706":20,"abstract":0,"break":20,"byte":[6,7,12],"catch":[0,20],"char":20,"class":[0,2,3,4,5,6,7,8,10,11,12,13,14,15,16,19],"const":[15,20],"default":[0,2,14,20],"enum":8,"float":18,"function":[7,8,13,18],"import":20,"int":[0,2,4,5,7,8,14,15,18,20],"m\u00f6ser":20,"new":20,"null":[6,12],"public":[0,2,13],"return":[1,2,4,5,6,7,8,11,12,13,14,15,17,18],"true":[0,6,12,15,18],"void":[7,8,15],"while":[],AWS:[13,20],But:20,CNS:20,For:[4,5,6,13,20],Not:13,One:20,The:[0,4,5,6,7,8,10,11,12,13,15,20],There:20,Uses:18,Using:19,With:20,__getitem__:[7,8],__getstate__:[],__init__:7,__iter__:[7,8],__len__:[7,8],__module__:7,__repr__:7,__setstate__:[],_kmditemusertagsbplist00:[],about:[0,13,20],abov:13,access:[13,18,20],accompani:20,accur:7,acheiv:13,acid:20,activ:20,actual:[2,20],add:[18,20],added:13,adding:20,addition:[13,20],addres:0,address:[4,5,6,7,8,10,11,12,13,14,15,16,18,19,20],address_count:8,address_deanon_tx:18,address_from_index:8,address_from_str:[8,13],address_num:0,address_str:[0,13],address_typ:[3,4,5,7,8,10,11,14],address_type_tx:8,addresses_with_prefix:8,addresstyp:8,advantag:20,after:[4,5,7,20],again:20,against:20,age:[4,7,10],algorithm:18,align:13,alishah:20,all:[0,2,3,4,5,6,7,8,12,13,14,15,18,20],allow:[2,8,13],alon:2,also:[0,13],altcoin:20,altern:20,amazon:19,amazonaw:20,ami:[13,20],amount:[13,20],analysi:[2,19],ani:[0,13,14,15,18],anoth:13,any_view:[7,8],anyinputrang:[4,7],anyoutputrang:[5,7],anytxrang:[6,7],api:20,appear:[13,18],append:20,appl:[],applic:20,approxim:20,apt:20,arg0:[4,5,7,8,14,15,18],arg1:[8,18],arg2:[8,18],arg3:18,arg:[7,8,18],argc:20,argv:20,arriv:[6,12],arvind:20,arxiv:20,associ:17,attach:[4,5,10,11],attr:[],autoconf:20,autogen:20,autom:20,automat:[13,20],avail:[13,20],avoid:20,back:20,balanc:[0,2,13,14],base:[0,4,5,6,7,10,11,12,13],base_s:[6,7,12],bash:20,basic:18,bech32:[13,20],been:[0,5,11,13,17,18,20],befor:[4,5,7],begin:[8,20],behavior:[13,18],behind:20,being:13,below:[13,20],best:20,between:[2,4,10,13,20],beyond:13,bin:20,binari:20,bind:20,bit:[0,6,7,12],bitcoin:[0,13,18,20],bitcoind:20,blank:[],block:[2,4,5,6,8,9,10,11,12,13,18,19,20],block_height:[6,12],block_tim:[6,12],blockc:7,blockchain:[0,7,9,13,18,19,20],blockchain_pars:20,blockcsi:13,blockfunc:8,blocksci:[0,2,3,4,5,6,7,8,10,11,12,13,14,15,17,18],blocksci_interfac:[0,2,4,5,7,8,14,15,18],blocksci_pars:[8,13,20],bool:[0,18],boot:20,both:[2,13],bound:8,boundari:13,branch:20,bring:13,browser:20,bug:20,build:20,built:20,busi:20,calcul:[0,2,14],call:[13,15],came:13,can:[0,2,6,12,13,20],capabl:[13,20],catchal:[],categori:[0,7,8],caus:13,certain:7,chain:[0,2,7,13,14,18,19,20],chang:[6,7,12,18,20],change_by_address_reus:18,change_by_address_typ:18,change_by_client_change_address_behavior:[13,18],change_by_locktim:18,change_by_optimal_chang:18,change_by_peeling_chain:18,change_by_power_of_ten_valu:18,change_output:[6,12],change_over_tx:18,charg:20,chator:20,check:[0,18],chunk:8,circumst:13,citp:20,clang:[],client:18,clone:20,closer:13,cluster:[15,19],cluster_count:15,cluster_python:[14,15,17],cluster_s:15,cluster_with_address:15,cluster_with_script:[],clustermanag:[16,19],cmake:20,code:20,coin:[18,20],coinbas:[6,7,12],coinbase_param:7,coinbase_tx:7,coinjoin:18,coinjoin_tx:18,coinjoinresult:18,com:20,come:[7,13,20],command:20,common:[2,13],compar:13,compil:19,complet:2,comput:20,concept:[2,13,20],config:8,configur:[8,20],consid:2,construct:[8,20],constructor:13,consumpt:13,contact:19,contain:[0,4,5,6,7,10,11,12,13,15,17,18,20],content:19,context:13,continu:[13,20],control:[2,18],contruct:8,conveni:20,copi:13,core:[13,18,20],correct:13,correspond:13,corrupt:13,cost:[13,15],could:13,count_of_typ:14,cpp:[13,20],cpu_count:8,crash:13,creat:[4,7,20],creation:[7,20],criteria:[6,8,12],cronjob:20,crontab:20,crucial:20,cryptocurr:20,currenc:[4,5,10,11],current:[13,18,20],custom:20,dat:15,data:[0,6,7,8,12,20],databas:[13,20],date:20,datepars:20,datetim:7,dcmake_build_typ:20,deanonym:18,decid:[2,18],dedup:[],dedup_address_typ:[],dedupaddress:[],dedupaddresstyp:[],demo:20,demonstr:20,depend:[13,20],describ:20,design:20,detail:[15,20],detect:18,determin:[6,12,18],dev:20,dge:20,dict:[7,14,15],dictionari:[14,15],differ:[2,13,18,20],difficult:13,difficulti:7,digit:18,direct:8,directli:20,directori:20,disk:20,displai:13,distinct:[2,13,18],distinguish:13,distribut:13,divid:[6,7,8,12],document:13,doe:20,doesn:20,domain:20,don:20,down:[13,20],download:20,due:13,dynam:20,each:[4,5,6,8,13],easier:13,ec2:[13,19],ecosystem:20,edu:20,eight:0,enabl:[13,20],end:8,enumer:3,equiv:[0,13],equiv_address_typ:[],equiv_script:0,equivaddress:[0,1,13],equivaddresstyp:[],equival:[0,1,13,19,20],equivalnc:[],equivl:8,essenti:20,ever:0,everi:[13,20],exact:[0,2],exampl:[13,20],except:2,exclud:13,exec:20,exist:[18,20],exit:13,explain:20,explan:[],explicitli:2,explor:[2,20],express:20,extra:0,extract:20,facebook:20,factori:13,fast:20,featur:18,fee:[6,12,18],fee_per_byt:[6,12],feedback:13,feel:20,fellowship:20,few:20,figur:13,file:[8,13,20],file_path_to_output:20,file_path_to_parser_output:20,filter_block:8,filter_tx:[8,13],filterfunc:8,find:[2,8],find_multisig:0,finish:20,first:[0,18,20],first_tx:0,fit:0,fix:20,folder:20,follow:[7,13,20],forget:20,fork:[],form:[2,13],format:20,forward:20,found:[],free:20,frequent:2,fresh:[6,12,18],from:[0,2,7,8,13,14,18,20],from_str:13,full:[0,2,7,13,14,20],fulli:20,further:2,futur:13,gcc:20,gener:[8,18,20],get:[0,8,14,15,20],getclust:15,git:20,github:20,give:20,given:[0,2,4,5,7,8,13,14,15,20],goe:13,goldfed:20,graduat:20,grant:20,grow:20,guarante:[13,20],guarente:2,guess:13,had:20,handl:[2,13,20],harri:20,has:[0,5,6,11,12,13,17,18,20],has_been_sp:0,hash:[1,2,6,7,8,12,13],hash_str:13,have:[13,17,18,20],head:20,header:[7,13,20],height:[0,2,4,5,6,7,8,12,14,18],heights_to_d:8,held:[0,2,14],help:7,here:20,heurist:[13,19],highli:[],home:20,hour:[13,20],hourli:20,how:[13,20],howev:[2,13,20],hpp:20,http:20,human:13,identif:13,identifi:0,illustr:20,imag:[13,20],immedi:20,impact:20,imperfect:20,improv:13,in_script:0,in_tx:[0,2,14],in_txes_count:[0,2,14],includ:[4,5,6,7,8,12,13,20],increment:[13,20],index:[4,5,6,8,10,11,12,19],indic:18,info:19,inform:[2,13],infrastructur:20,init:[8,20],initi:[7,8,13],input:[0,2,5,6,7,9,11,12,13,14,18,19,20],input_count:[6,7,12],input_valu:[6,7,12],ins:[0,2,12,14],insert:20,insid:[0,2,13,17],insight:20,instabl:13,instal:[13,20],instanc:[13,20],instant:20,instead:20,instruct:[13,19],intention:[],interfac:[2,13,20],intern:[0,6,12,13],interpret:20,interprett:20,intervent:20,introduc:[13,20],involv:[0,2,13,14,18],iota_view:15,is_address_deanon:18,is_change_ov:18,is_coinbas:[6,12],is_coinjoin:[13,18],is_definite_coinjoin:18,is_keyset_chang:18,is_script_deanon:[],is_spent:[5,11],issu:[13,20],iter:[7,8,13,14],its:[6,12,13,20],joinmarket:18,jupyt:20,kalodn:20,kei:[0,2,13,18,20],kept:20,keyset_change_tx:18,kind:[],knowledg:2,known:[13,20],kwarg:[7,8,18],label:13,lambda:15,languag:0,larg:13,larger:18,later:5,latest:19,launch:[13,20],lazi:15,lead:13,left:[],less:4,level:13,lib:20,libargtable2:20,libboost:20,libbz2:20,libcurl4:20,libgflag:20,libhiredi:20,libjsoncpp:20,libjsonrpccpp:20,liblmdb:20,liblz4:20,libmicrohttpd:20,librari:[13,19],libsnappi:20,libsparsehash:20,libsqlite3:20,libssl:20,libzstd:20,like:[2,18,20],limit:18,link:[4,5,10,11],linux:13,list:[0,2,4,5,6,7,8,12,14,15,17,18,20],load:20,loc:8,local:[13,19],localhost:20,locktim:[6,12,18],log:20,longer:13,look:13,mac:13,machin:20,made:20,mai:13,main:[13,20],make:[13,20],malt:20,manag:15,mani:[2,13,20],manner:20,map:[8,13],map_block:8,mapfunc:8,mapreduce_block:8,mapreduce_block_rang:8,mapreduce_tx:8,march:20,massiv:20,match:[8,18],matplotlib:20,max:[7,20],maxdepth:18,mean:20,meanwhil:20,memori:[13,20],merg:13,meta:20,metadata:[],method:[13,15],might:18,miner:[7,20],minor:20,minut:20,mkdir:20,mode:20,model:20,modifi:13,modul:[13,19,20],more:[4,13,20],most:[13,18,20],move:13,multi:0,multipl:[13,18],multiprocess:20,multisig:[3,13],multisig_pubkei:3,multisigaddress:[0,8],multisignatur:[1,13],multisigpubkei:8,multisigscript:[],multithread:[8,13],must:20,name:[13,20],namecoin:20,narayanan:20,navig:20,need:[18,20],net:7,net_address_type_valu:7,net_full_type_valu:7,network:20,never:5,next:20,next_block:7,node:[13,20],non:[1,6,7,12],nonc:7,none:[5,6,8,11,12,18],nonstandard:[0,3],nonstandardaddress:[0,8],nonstandardscript:[],note:[19,20],notebook:[13,20],notic:20,notion:[2,13],now:13,nsf:20,nulldata:3,nulldatascript:[],num:8,number:[0,2,4,5,6,7,8,10,12,13,14,15,18,20],object:[0,4,5,6,7,8,13,14,15,17,20],observ:20,occasion:13,old:13,onc:[13,20],one:[7,18],onli:[4,13,18,20],op_return:[0,6,12],open:[13,20],openssl:20,oper:[0,2,13,20],opreturnaddress:[0,8],optim:20,option:[8,18],order:[2,13,18,20],org:20,origin:0,orphan:13,other:[0,2,20],otherwis:[6,12],our:[13,20],out:[0,2,12,13,14],out_script:0,out_tx:[0,2,14],out_txes_count:[0,2,14],outpu:18,output:[0,2,4,6,7,8,9,10,12,13,14,18,19,20],output_count:[6,7,12],output_valu:[6,7,12],outputs_unsp:8,over:[2,8,13,14],overload:[7,8,18],p2pkh:[2,13,18],p2sh:[0,2,13,18],page:19,pai:[1,2,13],paid:[6,12],pair:8,panda:20,paper:[13,20],parallel:13,paramet:8,pars:[13,20],parser:13,particular:0,pass:[8,20],password:20,path:[8,20],pattern:13,paytoscripthashaddress:[0,8],paytoscripthashscript:[],paytowitnessscripthashaddress:[0,8],paytowitnessscripthashscript:[],pdf:20,peel:18,pem:20,per:13,perform:20,period:20,person:2,phase:13,piec:2,pip3:20,pip:20,place:[13,18],plan:13,plu:[6,7,12],pool:7,port:20,possess:13,possibl:18,possible_coinjoin_tx:18,potenti:18,ppa:20,practic:20,prefix:8,present:13,prev_block:7,prevent:[18,20],previou:13,previous:13,princeton:20,privat:20,produc:[13,20],proper:13,protocol:7,provid:[2,13,20],psutil:20,pubkei:[1,2,3,13],pubkeyaddress:[0,8],pubkeyaddressbas:[],pubkeyhash:[0,2,3],pubkeyhashaddress:[0,8],pubkeyhashscript:[],pubkeyscript:[],purpos:20,pycrypto:20,python3:20,python:13,queri:[13,20],quick:19,quickli:18,quit:15,quri:20,random:13,rang:[7,8,9,15,19,20],rapid:20,rather:2,ratio:[6,12],raw_address:0,reach:20,read:[13,20],readabl:13,readi:20,readm:13,recomend:20,recommend:20,recoveri:20,recurs:20,reduc:[8,13],reducefunc:8,reduct:[],refer:13,reflect:[2,8,13],regard:20,relat:13,releas:19,remot:20,remov:13,renam:13,reorg:[13,20],repo:20,report:13,repositori:20,repres:[0,7,8,10,11,12,14],requir:[0,2,13,20],rerun:13,research:20,resolv:[13,20],resourc:[],respect:13,result:[8,13],reus:18,reveal:0,revealed_tx:0,rocksdb:20,roughli:[8,13],rpc:20,run:[8,13,20],safe:13,same:[0,2,8,13,18,20],scratch:13,script:[1,2,13,15],script_deanon_tx:[],script_num:[],script_type_tx:[],scriptaddress:8,scripthash:[2,3],scripthashbas:[],scripttyp:13,search:19,sec:13,second:[13,20],secp256k1:20,secret:13,section:20,see:[7,13,20],segment:8,segment_index:8,segwit:[6,7,12,20],select:18,self:[0,2,4,5,7,8,14,15],send:18,sent:[0,2,4,5,13,14],sent_aft:4,sent_befor:4,sent_outsid:4,sent_within:4,separ:13,sequenc:[4,10],sequence_num:[4,10],serial:20,server:[13,20],set:[2,7,8,18,20],setup:[13,19],share:18,shared_lib:20,shortli:20,should:20,shown:13,shut:20,sign:0,signatur:[0,7],similar:[2,13],similarli:2,simpli:[13,20],sinc:[2,13,20],singl:[2,13],singleton:13,situat:13,size:[6,7,12,13,15,20],size_byt:[6,7,12],slave:20,slice:[7,8],slow:15,slowli:20,small:13,smaller:18,smallest:18,snipe:18,some:[13,18],somewhat:13,soon:20,specif:13,specifi:7,speed:20,spend:2,spending_tx:[5,11],spending_tx_index:[5,11],spent:[0,2,4,5,7,10,11,13,14,18],spent_aft:5,spent_befor:5,spent_outsid:5,spent_tx:[4,10],spent_tx_index:[4,10],spent_within:5,split:7,ssh:20,stai:20,standard:1,start:[8,20],startup:20,state:13,static_lib:20,step:20,steven:20,still:13,store:13,str:[7,8,14,15],stream:8,string:[0,8,13],structur:[18,20],style:0,submodul:20,subset:[4,5,18],substanti:13,sudo:20,suffer:20,sum:[2,6,7,12],supersed:13,support:[0,2,20],system:20,tabl:13,tag:[14,15,16,19],tagged_address:[14,17],tagged_clust:15,taggedaddress:[14,17],taggedclust:[15,17],taggeddedupaddress:[],taggedequivaddress:[],take:20,take_exactly_view_:15,tar:20,target:0,team:19,techniqu:2,temporarli:20,terminolog:13,test:20,than:[2,4,5,18,20],thei:2,them:2,thi:[0,2,4,5,6,7,8,10,11,12,13,14,15,18,20],thread:13,three:[6,7,12],threshold:7,through:20,thu:[2,20],time:[6,7,12,13,20],timestamp:7,togeth:2,tool:[2,20],toolchain:20,top:13,total:[0,6,7,8,12,15,18],total_s:[6,7,12],total_spent_of_ag:7,tranasct:[5,11],transact:[0,2,4,5,6,7,8,10,11,12,13,14,18,20],transasct:[6,12],transat:8,transform:20,transform_view:15,travers:20,treat:2,tunnel:20,tupl:[8,18],two:[2,13,20],tx_with_hash:[8,13],tx_with_index:8,txe:[0,2,7,14],txindex:[],type:[0,1,2,4,5,7,8,10,11,13,14,18,19],ubuntu:20,uncommon:13,under:[13,20],understand:2,unif:13,union:8,uniqu:[0,18],unique_change_by_address_reus:18,unique_change_by_address_typ:18,unique_change_by_client_change_address_behavior:18,unique_change_by_locktim:18,unique_change_by_optimal_chang:18,unique_change_by_peeling_chain:18,unique_change_by_power_of_ten_valu:18,univers:20,unnecessari:20,unsign:15,unspent:[5,8,11],unsupport:13,until:20,updat:[13,20],upgrad:20,upper:8,usag:[13,20],use:[0,20],used:[0,2,13,20],user:[2,20],usernam:20,uses:[18,20],using:[2,13,19],usr:20,utxo:7,valu:[4,5,6,7,10,11,12,18],varieti:20,variou:[2,13],veri:[2,13],version:[7,20],via:[6,12,13,20],view:[],virtual_s:[6,7,12],wai:13,want:20,web:20,weight:[6,7,12],well:[2,20],were:[2,5,7,13],wget:20,what:[],when:[2,13,20],where:[0,2,13,14,20],whether:[5,11,18],which:[0,2,4,5,7,8,11,13,17,18,20],whichev:20,window:20,wit:[1,2,13],with_prefix:[],with_typ:[4,5],within:[5,7,20],witness_pubkeyhash:3,witness_scripthash:3,witnesspubkeyhashaddress:[0,8],witnesspubkeyhashscript:[],work:[2,13,20],would:[2,13,20],wouldn:18,wrap:[2,13],wrapped_address:0,wrapped_script:[],written:20,xzf:20,you:[13,20],your:[8,20],your_private_kei:20,your_url:20,zcash:[],zlib1g:20},titles:["Addresses","Address Classes","Equivalent Addresses","Address Types","Input Range","Output Range","Tx Range","Block","Blockchain","Chain Classes","Input","Output","Tx","Release notes","Cluster","ClusterManager","Clustering","Tagging Classes","Heuristics","BlockSci Version 0.4.5 Documentation","BlockSci"],titleterms:{"break":13,"class":[1,9,17],"new":13,"null":[],"return":0,Using:20,addit:13,address:[0,1,2,3,17],amazon:20,analysi:20,api:13,block:7,blockchain:8,blocksci:[19,20],bug:13,chain:9,chang:13,cluster:[14,16,17],clustermanag:15,compil:20,contact:20,data:13,dedup:[],dedupaddress:[],document:[19,20],ec2:20,enhanc:13,equiv:[],equivaddress:2,equival:2,featur:13,fix:13,format:13,hash:0,heurist:18,increas:13,index:13,indic:19,info:20,input:[4,10],instruct:20,latest:20,librari:20,limit:13,local:20,lookup:13,multisig:[],multisignatur:0,non:0,note:13,old:19,output:[5,11],pai:0,parser:20,perform:13,pubkei:0,pubkeyhash:[],python:20,quick:20,rang:[4,5,6],releas:[13,20],script:0,scripthash:[],segwit:13,setup:20,standard:0,support:13,tabl:19,tag:17,team:20,type:3,using:20,version:[13,19],wit:0}})